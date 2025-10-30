import { blogPosts } from "/data.js";
import { getBlogEntriesHtml } from "/utils.js";

blogPosts.sort((a,b)=> b.dateObj - a.dateObj)

const blogArticlesEl = document.getElementById("blog-articles");



blogArticlesEl.innerHTML += getBlogEntriesHtml(blogPosts, 3)