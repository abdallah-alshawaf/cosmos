const connection= require('../config/connection')

const getPosts=()=>{
    return connection.query('select * from posts')
}

module.exports= getPosts