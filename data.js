import { generateRandomDates } from "./utils.js";

export const blogPosts = [
    {
        url: "blog-01.html",
        image: "blog-image-01.png",
        alt: "Computer screen showing code.",
        // dateObj: getRandomDate(2020,2024),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog one",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-02.html",
        image: "blog-image-02.png",
        alt: "An open laptop sitting on a table on an outdoors seating area.",
        // dateObj: new Date("2022-08-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog two",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-03.html",
        image: "blog-image-03.png",
        alt: "A person on a beach during sunset.",
        // dateObj: new Date("2022-07-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog three",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-04.html",
        image: "blog-image-04.png",
        alt: "A hand holding a lightbulb at dusk.",
        // dateObj: new Date("2022-07-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog four",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-05.html",
        image: "blog-image-05.png",
        alt: "Abstract art using purples and magentas.",
        // dateObj: new Date("2022-07-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog five",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-06.html",
        image: "blog-image-06.png",
        alt: "A laptop showing code on screen.",
        // dateObj: new Date("2022-07-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog six",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-07.html",
        image: "blog-image-07.jpg",
        alt: "A laptop showing code on screen.",
        // dateObj: new Date("2022-07-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog seven",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-08.html",
        image: "blog-image-08.jpg",
        alt: "A laptop showing code on screen.",
        // dateObj: new Date("2022-07-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog eight",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-09.html",
        image: "blog-image-09.jpg",
        alt: "A laptop showing code on screen.",
        // dateObj: new Date("2022-07-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog nine",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-10.html",
        image: "blog-image-10.jpg",
        alt: "A laptop showing code on screen.",
        // dateObj: new Date("2022-07-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog ten",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
    {
        url: "blog-11.html",
        image: "blog-image-11.jpg",
        alt: "A laptop showing code on screen.",
        // dateObj: new Date("2022-07-23"),
        date: "july 23, 2022",
        datetime: "2022-07-23",
        title: "Blog eleven",
        textContent: `
        I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.
        `,
    },
];

const randomDates = generateRandomDates(blogPosts.length);

blogPosts.forEach((post, index) => (post.dateObj = randomDates[index]));
