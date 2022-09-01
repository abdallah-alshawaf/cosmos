const {Pool}= require('pg')
const dotenv= require('dotenv').config()


const connection=new Pool({
    connectionString: process.env.DATABASE_URL,
    SSL: false
})

module.exports= connection
