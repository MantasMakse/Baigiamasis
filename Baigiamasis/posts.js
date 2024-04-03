const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
fetch(ENDPOINT).then((res) => {
    return res.json()
}).then((data) => {
    createPostElement(data)
})
const createPostElement = (posts) => {
    const postsList = document.getElementById('posts-list')
    posts.map((post) => {
        const postLink = document.createElement('a')
        postLink.href = `post.html?postId=${post.id}`
        postLink.classList.add('post-item')
        postsList.append(postLink)
        const postTitle = document.createElement('h2')
        postLink.append(postTitle)
        postTitle.textContent = post.title
        const postBody = document.createElement('p')
        postLink.append(postBody)
        postBody.textContent = post.body
    })

}