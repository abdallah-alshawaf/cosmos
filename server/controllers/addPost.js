const addPostQuery= require('../database/queries/addPostQuery')
const jwt= require('jsonwebtoken')
const addPost=(req,res)=>{
const {title,image,content}= req.body
jwt.verify(req.cookies.token, 'cosmos-private-key', (err, decoded) => {
    if (err) {
        res.clearCookie('token').redirect('/')
    } else {
        addPostQuery(title,image,content,decoded.user_id)
    }
})

}

module.exports=addPost