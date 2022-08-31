const signinButton = document.querySelector('.signin-button');

signinButton.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    fetch('/signin', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
            email, password
        })
    }) 
    .then(response => response.json())
    .then(res => console.log(res))
    .then(window.location.href = '/html/signup.html')
    .catch(err => console.log(err))

})