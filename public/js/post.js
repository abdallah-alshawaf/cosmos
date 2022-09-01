const container = document.querySelector('.container');
const usernameDetails = document.getElementById('username-database');

const createElement = (tag) => {
    return document.createElement(tag);
}

const obj = {
    title: 'bolg titledfgdf shsd',
    content: 'Loresdf hghdfgjdfjcing elit. Eos, incidunt veniam aspernatur natus veritatis cumque! Tenetur voluptas iure reiciendis accusantium quibusdam doloribus amet nemo, impedit esse tempore repudiandae culpa omnis ipsum. Qui, dolore? Optio saepe quo impedit? Recusandae aperiam, veritatis quas esse vero ab tempora! Sint porro eveniet deleniti eum!',
    image: 'https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg'
};



const postDom = (obj) => {

    const h1 = createElement('h1');
    h1.textContent = obj.title;
    container.appendChild(h1);

    const img = createElement('img');
    img.setAttribute('src', obj.image);
    img.setAttribute('alt', obj.title);
    container.appendChild(img);

    const section = createElement('section');
    const p = createElement('p');
    p.textContent = obj.content;
    section.appendChild(p);
    container.appendChild(section);
}

const params = new URLSearchParams(window.location.search);

fetch(`/posts/${params.get('id')}`)
.then((data)=> data.json())
.then(data=> postDom(data[0]))
.catch(err=> console.log(err))

fetch('/decoding')
.then(res => res.json(res))
.then(res => usernameDetails.textContent = res.user_name)
.catch(err => usernameDetails.textContent = 'Not Logged In')

