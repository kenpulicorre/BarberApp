const {DataTypes} = require('sequelize');
const sequelize = require('../database/config');

const UserModel = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

    rol: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: false});

module.exports = UserModel;