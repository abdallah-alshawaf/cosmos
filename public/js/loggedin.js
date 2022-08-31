fetch('/posts')
.then((data)=> data.json())
.then(data=> createPostCards(data))
.catch(err=> console.log(err))


const createPostCards=(data)=>{
const cards = document.querySelector('.cards');

data.forEach((element, index) => {
    const card = document.createElement('div');
    const postImage = document.createElement('img');
    const postContainer = document.createElement('div');
    const postTitle = document.createElement('div');

    card.classList.add('card');
    postImage.classList.add('post-img');
    postContainer.classList.add('post-container');
    postTitle.classList.add('post-title');

    postImage.src = element.image;
    postTitle.textContent = element.title;

    postContainer.appendChild(postTitle);
    card.appendChild(postImage);
    card.appendChild(postContainer);

    cards.appendChild(card)

})
}

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

const addPost= document.querySelector('#add-post-btn')
const popUp= document.querySelector('.create-post-form')

addPost.addEventListener('click', ()=>{
    popUp.style.display= 'flex'
})

const popUpBtn= document.querySelector('.create-post-button')

popUpBtn.addEventListener('click', (e)=>{
    e.preventDefault()
const title= document.querySelector('#post-title-input').value
const content= document.querySelector('#post-content-input').value
const image= document.querySelector('#post-image-input').value

fetch('/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        },
    body: JSON.stringify({
        title,image,content
    })    
}).then(window.location.href= '/index')
})