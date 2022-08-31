const connection = require('../config/connection');

const addUserQuery = (username, email, password) => {
    return connection.query('INSERT INTO users (user_name, password, email) VALUES($1, $2, $3)', [username, password, email])
};

module.exports = addUserQuery;