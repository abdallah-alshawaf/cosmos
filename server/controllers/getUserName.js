const jwt = require('jsonwebtoken');
const getUserNameQuiry = require('../database/queries/getUserNameQuiry');
const getUserName = (req, res) => {
    jwt.verify(req.cookies.token, 'cosmos-private-key', (err, decoded) => {
        if (err) {
            res.clearCookie('token').redirect('/')
        } else {
            getUserNameQuiry(decoded.user_id)
            .then(result => res.json(result.rows[0]))
        }
    })};

    module.exports = getUserName;