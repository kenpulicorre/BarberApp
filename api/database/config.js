const {Sequelize} = require('sequelize');

const {DB_USER, DB, DB_HOST, DB_PASSWORD} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`, {
    logging: false,
    native: false
});

module.exports = sequelize;