export const urlBase = "/cpp-book/";

function base(url: string) {
    return `${urlBase}${url}${url.endsWith("/") || !url ? "" : "/"}`;
}

type Sitemap = {
    name: string;
    base?: string;
    pages: {
        name: string;
        base: string;
        link?: string;
    }[];
}[];

type Site = {
    name: string;
    pages: {
        name: string;
        link: string;
    }[];
}[];

const sitemap: Sitemap = [
    {
        name: "Introduction",
        pages: [
            {
                name: "Index",
                base: "",
            },
        ],
    },
    {
        name: "Basics",
        base: "basics",
        pages: [
            {
                name: "Terminology",
                base: "terminology",
            },
            {
                name: "Simplest Program",
                base: "simple",
            },
            {
                name: "Console Input/Output",
                base: "io",
            },
            {
                name: "Variables",
                base: "variables",
            },
            {
                name: "Data Types",
                base: "data-types",
            },
            {
                name: "Operators",
                base: "operators",
            },
        ],
    },
    {
        name: "The Standard Library Datatypes",
        base: "std",
        pages: [
            {
                name: "Strings",
                base: "strings",
            },
            {
                name: "Vectors",
                base: "vectors",
            },
            {
                name: "Maps TODO",
                base: "maps",
            },
            {
                name: "Sets TODO",
                base: "sets",
            },
        ],
    },
    {
        name: "Control Structures",
        base: "control-structures",
        pages: [
            {
                name: "Conditions",
                base: "conditions",
            },
            {
                name: "Loops",
                base: "loops",
            },
            {
                name: "Iterators",
                base: "iterators",
            },
        ],
    },
    {
        name: "Memory Management",
        base: "memory",
        pages: [
            {
                name: "Stack vs Heap",
                base: "stack-heap",
            },
            {
                name: "Pointers",
                base: "pointers",
            },
            {
                name: "Smart Pointers",
                base: "smart-pointers",
            },
            {
                name: "Arrays",
                base: "arrays",
            },
        ],
    },
    {
        name: "Functions",
        base: "functions",
        pages: [
            {
                name: "Function Basics",
                base: "basics",
            },
            {
                name: "Function Overloading",
                base: "overloading",
            },
            {
                name: "First Order Functions",
                base: "first-order",
            },
        ],
    },
    {
        name: "Code Splitting",
        base: "files",
        pages: [
            {
                name: "Splitting Code",
                base: "splitting",
            },
            {
                name: "Header Files",
                base: "headers",
            },
        ],
    },
    {
        name: "Object Oriented Programming",
        base: "oop",
        pages: [
            {
                name: "Classes",
                base: "classes",
            },
            {
                name: "Class Header Files",
                base: "headers",
            },
            {
                name: "Destructors",
                base: "destructors",
            },
            {
                name: "Inheritance",
                base: "inheritance",
            },
            {
                name: "Polymorphism",
                base: "polymorphism",
            },
            {
                name: "Interfaces",
                base: "interfaces",
            },
            {
                name: "Templates",
                base: "templates",
            },
        ],
    },
];

export function getSitemap(): Site {
    return sitemap.map((section) => ({
        ...section,
        pages: section.pages.map((page) => ({
            ...page,
            link: base(`${section.base ? `${section.base}/` : ""}${page.base}`),
        })),
    }));
}

function getFlatMap() {
    return sitemap.flatMap((section) =>
        section.pages.map((page) => ({
            ...page,
            link: base(`${section.base ? `${section.base}/` : ""}${page.base}`),
        }))
    );
}

export function getNeighbors(link: string) {
    const flatMap = getFlatMap();
    const index = flatMap.findIndex((page) => page.link === link);
    return {
        prev: flatMap[index - 1],
        next: flatMap[index + 1],
    };
}
