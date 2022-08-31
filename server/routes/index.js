const signin = require('../controllers/signin');
const {join} = require('path'); 
const signup = require('../controllers/signup');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(join(__dirname,'..', '..', 'public', 'index.html'));
});

router.post('/signin', signin);
router.post('/signup', signup)

module.exports = router;