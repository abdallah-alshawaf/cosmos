const connection = require('../config/connection');

const getUserName = (user_id) => {
    return connection.query('SELECT user_name FROM users WHERE id = $1', [user_id]);
};

module.exports = getUserName;