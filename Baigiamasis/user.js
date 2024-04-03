const urlParams = new URLSearchParams(window.location.search);

const userId = urlParams.get('id');

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';


fetch(ENDPOINT)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // Filter the data based on userId
        const filteredUser = data.filter((user) => {
            return user.id === parseInt(userId);
        });
        displayUser(filteredUser, userId)
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

const displayUser = (user, id) => {
    const username = document.getElementById('username')
    const firstName = document.getElementById('first-name')
    const userEmail = document.getElementById('user-email')
    const city = document.getElementById('city')
    const suite = document.getElementById('suite')
    const zipcode = document.getElementById('zipcode')
    const companyName = document.getElementById('company-name')
    const companyActivity = document.getElementById('company-activity')
    user.map((item) => {
        username.textContent = `${item.username}\'s profile`;
        firstName.textContent += item.name;
        userEmail.textContent += item.email;
        city.textContent += item.address.city;
        suite.textContent += item.address.suite;
        zipcode.textContent += item.address.zipcode;
        companyName.textContent += item.company.name;
        companyActivity.textContent += item.company.bs
    })
    getUserPosts(id)
}
const getUserPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => response.json())
        .then((data) => createPosts(data));
}
const createPosts = (posts) => {
    const postsListElement = document.getElementById('user-posts-list')
    posts.map((post) => {
        const postLink = document.createElement('a')
        postLink.href = `post.html?postId=${post.id}`
        postsListElement.append(postLink)
        postLink.classList.add('user-post')
        const postTitle = document.createElement('h2')
        postLink.append(postTitle)
        postTitle.textContent = post.title;

        const postBody = document.createElement('p')
        postLink.append(postBody)
        postBody.textContent = post.body
    })
}