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