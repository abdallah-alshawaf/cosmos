const connection= require('../config/connection')

const getPostsQuery =()=>{
    return connection.query('select * from posts')
}

const getOnePostQuery = (id) => {
    return connection.query('select * from posts WHERE id = $1', [id])
}

module.exports= {getPostsQuery, getOnePostQuery}