const {Pool}= require('pg')
const dotenv= require('dotenv').config()


const connection=new Pool({
    connectionString: process.env.DEV_DB_URL,
    SSL: false
})

module.exports= connection
