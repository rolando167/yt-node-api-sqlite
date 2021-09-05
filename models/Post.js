const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const POST = sequelize.define("post", {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING(200),
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName:'post',
    freezeTableName: true
});

module.exports = POST;