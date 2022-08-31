const connection= require('../config/connection')

const getUser = (email)=>{
    return connection.query('SELECT * FROM users WHERE users.email = $1', [email])
}

module.exports= getUser