const addUserQuery = require('../database/queries/addUserQuery')
const bcrypt= require('bcrypt')
const joi= require('joi')
const signup = (req, res) => {
   // console.log(req.body);
   const { username, email, password, confirmPassword }= req.body;
   //validation
const schema= joi.object({
   username: joi.string().required(),
   email: joi.string().email().required(),
   password: joi.string().min(8).max(20).alphanum().required(),
   confirmPassword: joi.string().required().valid(joi.ref('password'))
})

schema.validateAsync(req.body).then(result=> {
   bcrypt.hash(password, 10, (err, hash)=> {
      if(err) console.log(err)
      addUserQuery(username, email, hash);
      res.json('success')
     })
  
})
.catch(err=> console.log(err.details[0].message))
   

};

module.exports = signup;