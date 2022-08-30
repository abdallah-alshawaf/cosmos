const connection= require('../config/connection')

const getUser=()=>{
    return connection.query('select * from users')
}

module.exports= getUser