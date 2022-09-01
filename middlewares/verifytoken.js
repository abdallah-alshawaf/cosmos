const jwt = require('jsonwebtoken');

const verifyUserToken = (req, res, next) => {
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, 'cosmos-private-key', (err, decoded) => {
            if (err) {
                res.clearCookie('token').redirect('/')
            } else {
                next();
            }
        })
    } else {
        next();
    }
}

module.exports = verifyUserToken;