const {join} = require('path'); 
const jwt = require('jsonwebtoken');

const {
    getUserName,
    signin,
    signup,
    getPosts,
    addPost
} = require('../controllers');

const router = require('express').Router();

router.post('/signin', signin);
router.post('/signup', signup);

router.get('/index', (req, res, next) => {
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, 'cosmos-private-key', (err, decoded) => {
            if (err) {
                res.clearCookie('token').redirect('/')
            } else {
                res.sendFile(join(__dirname, '..', '..', 'private', 'loggedin.html'));
                
            }
        })
    } else {
        console.log(req.cookies)
        res.redirect('/')
}

})

router.get('/clearcookie', (req, res) => {
    res.clearCookie('token').end();
})

router.get('/decoding', getUserName)
router.get('/posts', getPosts)
router.post('/posts', addPost)
module.exports = router;