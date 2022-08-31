const connection= require('../config/connection')

const addPostQuery=(title,image,content,user_id)=>{
    return connection.query('INSERT INTO posts (title,content,image,user_id) values ($1 ,$2, $3, $4)',[title,content,image,user_id])
}

module.exports=addPostQuery