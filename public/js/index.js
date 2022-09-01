fetch('/posts')
.then((data)=> data.json())
.then(data=> createPostCards(data))
.catch(err=> console.log(err))

fetch('/check-auth')
.then(res => res.json())
.then(res => { if (res === 'success') {
    window.location.href = "/index"
}})

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

    card.addEventListener('click', () => {
        window.location.href = `/html/post.html?id=${element.id}`
    })

    postContainer.appendChild(postTitle);
    card.appendChild(postImage);
    card.appendChild(postContainer);

    cards.appendChild(card)

})
}