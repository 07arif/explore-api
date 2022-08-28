// 32-6 Load posts and display on the website with CSS

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
/*
1.get the element  where you want to add the new elements.
2.create child element
3.set innerText or innerHtml
4.appendChild

*/

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
<h4>User-${post.userId}</h4>
<h5>Post:${post.title}</h5>
<p> Post Description: ${post.body}</p>
`;

        postContainer.appendChild(div)
    }
}
loadPosts();
