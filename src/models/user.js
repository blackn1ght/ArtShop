var Database = require('../database.js');
var db = new Database();
var Sequelize = require('sequelize');

var User = db.createTable('User', {
	username: Sequelize.STRING,
	password: Sequelize.STRING
});

module.exports = User;
