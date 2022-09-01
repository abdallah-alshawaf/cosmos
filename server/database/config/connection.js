const {Pool}= require('pg')
const dotenv= require('dotenv').config()


const connection=new Pool({
    connectionString: process.env.DATABASE_URL,
    SSL: {
        rejectUnauthorized: false
    }
})

module.exports= connection
