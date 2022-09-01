const getUserName = require('./getUserName');
const signin = require('./signin');
const signup = require('./signup');
const {getPosts, getOnePost}= require('./getPosts')
const addPost= require('./addPost')

module.exports = {
    getUserName,
    signin,
    signup,
    getPosts,
    addPost,
    getOnePost
}