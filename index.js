import { blogPosts } from "/data.js";

blogPosts.sort((a,b)=> b.dateObj - a.dateObj)



// console.log(blogPosts)

const blogArticlesEl = document.getElementById("blog-articles");
const viewMoreBtn = document.getElementById("view-more-btn");

let blogEntriesShown = 0;

viewMoreBtn.addEventListener("click", () => {
    handleViewMoreBtn();
});

function getBlogEntriesHtml() {
    let blogEntriesHtml = "";
    for (let i = blogEntriesShown; i < 6; i++) {
        blogEntriesHtml += `
        <a class="blog-link" href="./${blogPosts[i].url}">
            <article class="blog-post">
                <figure class="blog-img-preview">
                    <img src="images/${blogPosts[i].image}" alt="${
            blogPosts[i].alt
        }" class="blog-img">
                </figure>

                <time datetime="${
                    blogPosts[i].dateObj.toISOString().split("T")[0]
                }">${blogPosts[i].dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })}</time>
                <h2>${blogPosts[i].title}</h2>
                <p class="blog-txt">${blogPosts[i].textContent}</p>
            </article>
        </a>
        `;
        blogEntriesShown++;
    }
    return blogEntriesHtml;
}

function renderBlogEntries(html) {
    blogArticlesEl.innerHTML += html;
}

function handleViewMoreBtn() {
    const blogEntriesToShow = blogEntriesShown + 3;
    let blogEntriesHtml = "";
    for (
        let i = blogEntriesShown;
        i <
        (blogEntriesToShow > blogPosts.length
            ? blogPosts.length
            : blogEntriesToShow);
        i++
    ) {
        blogEntriesHtml += `
        <a class="blog-link" href="./${blogPosts[i].url}">
            <article class="blog-post">
                <figure class="blog-img-preview">
                    <img src="images/${blogPosts[i].image}" alt="${
            blogPosts[i].alt
        }" class="blog-img">
                </figure>

                <time datetime="${
                    blogPosts[i].dateObj.toISOString().split("T")[0]
                }">${blogPosts[i].dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })}</time>
                <h2>${blogPosts[i].title}</h2>
                <p class="blog-txt">${blogPosts[i].textContent}</p>
            </article>
        </a>
        `;
        blogEntriesShown++;
    }
    blogArticlesEl.innerHTML += blogEntriesHtml;
    if (blogEntriesShown === blogPosts.length) {
        viewMoreBtn.style.display = "none"
    }
}

renderBlogEntries(getBlogEntriesHtml());
