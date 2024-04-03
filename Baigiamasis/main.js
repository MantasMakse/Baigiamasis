const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'
fetch(ENDPOINT)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        createCards(data)
    })
const createCards = (users) => {
    users.map((user) => {

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const cardHeaderDiv = document.createElement('div');
        cardHeaderDiv.classList.add('card-header');

        const firstNameHeader = document.createElement('h2');
        firstNameHeader.classList.add('first-name');
        firstNameHeader.textContent = user.name

        const emailSpan = document.createElement('span');
        emailSpan.classList.add('email');
        emailSpan.textContent = user.email

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        const cityHeader = document.createElement('h3');
        cityHeader.classList.add('city');
        cityHeader.textContent = user.address.city

        const addressHeader = document.createElement('h3');
        addressHeader.classList.add('address');
        addressHeader.textContent = user.address.address

        const suiteSpan = document.createElement('span');
        suiteSpan.classList.add('suite');
        suiteSpan.textContent = user.address.suite

        const zipcodeSpan = document.createElement('span');
        zipcodeSpan.classList.add('zipcode');
        zipcodeSpan.textContent = user.address.zipcode

        const cardFooterDiv = document.createElement('div');
        cardFooterDiv.classList.add('card-footer');


        const companyNameHeader = document.createElement('h2');
        companyNameHeader.classList.add('company-name');
        companyNameHeader.textContent = user.company.name

        const companyActivitySpan = document.createElement('span');
        companyActivitySpan.classList.add('company-activity');
        companyActivitySpan.textContent = user.company.bs

        const userLink = document.createElement('a')
        userLink.href = `user.html?id=${user.id}`
        userLink.textContent = 'Check user'


        cardHeaderDiv.appendChild(firstNameHeader);
        cardHeaderDiv.appendChild(emailSpan);

        cardBodyDiv.appendChild(cityHeader);
        cardBodyDiv.appendChild(addressHeader);
        cardBodyDiv.appendChild(suiteSpan);
        cardBodyDiv.appendChild(zipcodeSpan);

        cardFooterDiv.appendChild(companyNameHeader);
        cardFooterDiv.appendChild(companyActivitySpan);
        cardFooterDiv.appendChild(userLink)

        cardDiv.appendChild(cardHeaderDiv);
        cardDiv.appendChild(cardBodyDiv);
        cardDiv.appendChild(cardFooterDiv);
        const userWrapper = document.getElementById('users-content')
        userWrapper.appendChild(cardDiv);
    })

}

