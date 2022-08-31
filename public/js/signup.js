const sinupBtn = document.querySelector('.signup');


sinupBtn.addEventListener('click', (e) => {

    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const confirmPassword = document.querySelector('.confirmPassword').value;

    e.preventDefault();
    fetch('/signup', {method: 'POST',
     headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        username, email, password, confirmPassword
    })
})

})