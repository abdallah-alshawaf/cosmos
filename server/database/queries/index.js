const {getPostsQuery, getOnePostQuery}= require('./getPostsQuery')
const getUser= require('./getUserQuery')
const getUserName = require('./getUserNameQuiry')
const addUser = require('./addUserQuery')
const addPost= require('./addPostQuery')
 
module.exports={
 getPostsQuery,
 getUser,
 getUserName,
 addUser,
 addPost,
 getOnePostQuery
}