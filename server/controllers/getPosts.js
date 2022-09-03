const {getPostsQuery, getOnePostQuery} = require('../database/queries/getPostsQuery')

const getPosts=(req,res)=>{
      getPostsQuery().then(data=> res.json(data.rows))
}

const getOnePost = (req, res)=>{
      getOnePostQuery(req.params.id)
      .then(data=> res.json(data.rows))
      .catch(err => { 
            console.log(err);
            res.json('Error Not Found');
      }

      )
}

module.exports= {getOnePost, getPosts}