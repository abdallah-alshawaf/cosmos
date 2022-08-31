const {getUser} = require('../database/queries')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const joi = require('joi');
const signin = (req, res) => {
    const {email, password} = req.body;

        const schema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().min(6).max(20).alphanum().required()
        });

        schema.validateAsync(req.body).then(result => {
            getUser(email)
            .then(data => data.rows[0])
            .then(data => {
            if (!data) {
                res.json('No Email Found')
            } else {
                bcrypt.compare(password, data.password)
                .then(result=>{
                if(result){
                jwt.sign({isLogged: 'true', user_id: data.id}, 'cosmos-private-key', (err, token) => {
                        if (err) {
                            console.log('Error in Token Generation')
                        }
    
                        res.cookie('token', token).redirect('/');
                    })
                }else {
                    res.json('Wrong Password')
                }
                            })
                
            }
        })
        }).catch(err => console.log(err.details.message))

        
    
  }

module.exports = signin;