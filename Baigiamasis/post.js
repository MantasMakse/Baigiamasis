const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get('postId');

const ENDPOINT = `https://jsonplaceholder.typicode.com/posts?id=${postId}`

fetch(ENDPOINT).then((res) => {
    return res.json()
}).then((data) => {
    createPost(data)
})
const createPost = (post) => {
    const postElement = document.getElementById('post-item')
    const postTitle = document.createElement('h2')
    const postBody = document.createElement('p')
    postElement.append(postTitle)
    postElement.append(postBody)

    post.map((item) => {
        postTitle.textContent = item.title;
        postBody.textContent = item.body
    })
}