import { defineConfig } from 'astro/config';
import codeExtra from 'remark-code-extra';

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
  site: 'https://Miitto.github.io',
  trailingSlash: "always",
  base: 'cpp-book',
  markdown: {
    remarkPlugins: [setLayout, [codeExtra, {
    // Add a copy button to code blocks
    transform: node => ({
      after: [
        {
            type: 'element',
            tagName: 'button',
            properties: {
              onClick: ` navigator.clipboard.writeText(this.previousSibling.innerText)`,
              class: "copy-button"
            },
            children: [{
              type: 'element',
              tagName: 'span',
              properties: {
                style: "font-size: .875em; margin-right: .12em; position: relative; top: -.25em; left: -.125em"
              },
              children: [{
                type: 'text',
                value: '📄'
              },
              {
                type: 'element',
                tagName: 'span',
                properties: {
                  style: "position: absolute; top: .25em; left: .25em"
                },
                children: [{
                  type: 'text',
                  value: '📄'
                }]
              }
              ]
            }]
        }
      ]
    })
  }]],

  },
});