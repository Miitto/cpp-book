import { defineConfig } from "astro/config";
import codeExtra from "remark-code-extra";
import {
    transformerNotationDiff,
    transformerNotationFocus,
    transformerNotationHighlight,
    transformerNotationWordHighlight,
    transformerNotationErrorLevel,
} from "@shikijs/transformers";

import mdx from "@astrojs/mdx";

const setLayout = () => {
    return function (_, file) {
        file.data.astro.frontmatter.layout =
            file.data.astro.frontmatter.layout || "@layouts/Layout.astro";
    };
};

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    site: "https://Miitto.github.io",
    trailingSlash: "always",
    base: "cpp-book",
    markdown: {
        shikiConfig: {
            wrap: false,
            transformers: [
                transformerNotationDiff(),
                transformerNotationFocus(),
                transformerNotationHighlight(),
                transformerNotationWordHighlight(),
                transformerNotationErrorLevel(),
            ],
        },
        remarkPlugins: [
            setLayout,
            [
                codeExtra,
                {
                    // Add a copy button to code blocks
                    transform: (node) => {
                        let files = [];
                        let beforeElements = [];
                        let afterElements = [];
                        if (node.meta) {
                            node.meta.split(" ").forEach((meta) => {
                                if (
                                    /^http(s)?:\/\//.test(meta) || // If the meta is a URL
                                    /^.(.)?\//.test(meta) // If the meta is a path
                                ) {
                                    afterElements.push({
                                        type: "element",
                                        tagName: "a",
                                        properties: {
                                            style: "position: relative",
                                            href: meta,
                                        },
                                        children: [
                                            {
                                                type: "text",
                                                value: "Code Source",
                                            },
                                        ],
                                    });
                                } else {
                                    files.push(meta);
                                }
                            });
                            beforeElements.push({
                                type: "element",
                                tagName: "div",
                                properties: {
                                    class: "file-name",
                                },
                                children: files.map((file) => {
                                    let active =
                                        files.length === 1 ||
                                        file.startsWith("A:");
                                    return {
                                        type: "element",
                                        tagName: "span",
                                        properties: {
                                            class: active ? "active" : "",
                                        },
                                        children: [
                                            {
                                                type: "text",
                                                value: file.startsWith("A:")
                                                    ? file.slice(2)
                                                    : file,
                                            },
                                        ],
                                    };
                                }),
                            });
                        }
                        let transform = (node) => {
                            let div = {
                                type: "element",
                                tagName: "div",
                                properties: {
                                    class: "code-container",
                                },
                                children: [
                                    node.data.hChildren[beforeElements.length],
                                    {
                                        type: "element",
                                        tagName: "button",
                                        properties: {
                                            onClick: ` navigator.clipboard.writeText(this.previousSibling.innerText)`,
                                            class: "copy-button",
                                        },
                                        children: [
                                            {
                                                type: "element",
                                                tagName: "span",
                                                properties: {
                                                    style: "font-size: .875em; margin-right: .12em; position: relative; top: -.25em; left: -.125em",
                                                },
                                                children: [
                                                    {
                                                        type: "text",
                                                        value: "📄",
                                                    },
                                                    {
                                                        type: "element",
                                                        tagName: "span",
                                                        properties: {
                                                            style: "position: absolute; top: .25em; left: .25em",
                                                        },
                                                        children: [
                                                            {
                                                                type: "text",
                                                                value: "📄",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            };
                            node.data.hChildren[beforeElements.length] = div;
                        };
                        return {
                            before: beforeElements,
                            after: afterElements,
                            transform,
                        };
                    },
                },
            ],
        ],
    },
});
