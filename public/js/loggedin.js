// const cards = document.querySelector('.cards');

// data.forEach((element, index) => {
//     const card = document.createElement('div');
//     const postImage = document.createElement('img');
//     const postContainer = document.createElement('div');
//     const postTitle = document.createElement('div');

//     card.classList.add('card');
//     postImage.classList.add('post-img');
//     postContainer.classList.add('post-container');
//     postTitle.classList.add('post-title');

//     postImage.src = element.img;
//     postTitle.textContent = element.title;

//     postContainer.appendChild(postTitle);
//     card.appendChild(postImage);
//     card.appendChild(postContainer);


// })

const logoutbtn = document.getElementById('logoutbtn');
const usernameDetails = document.getElementById('username-database');

logoutbtn.addEventListener('click', () => {
    fetch('/clearcookie')
    .then(window.location.href = '/')
    .catch(err => console.log(err))
})

fetch('/decoding')
.then(res => res.json(res))
.then(res => usernameDetails.textContent = res.user_name)

