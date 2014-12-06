var Database = function() {
	var self = this;

	self.db = "artshop";
	self.username = "tom";
	self.password = "//Sh1n0b1";
	self.tables = {};

	var Sequelize = require('sequelize');
	self.sequelize = new Sequelize(self.db, self.username, self.password, {
		dialect: "postgres",
		port: 5432
	});

	self.testConnection = function() {
		var connected = false;
		self.sequelize.authenticate().complete(function(err) {
			if (err){
				console.log('Failed to connect to database.', err);
				connected = false;
			} else {
				console.log('Successfully connected to database ' + self.db + '.');
				connected = true;
			}
		});
		return connected;
	};

	self.createTable = function(tableName, schema) {
		var entity = self.sequelize.define(tableName, schema);
		var saved = self.sequelize.sync().complete(function(err) {
			if (!!err)
				console.log('Failed to create table "' + tableName + '".', err);
			else {
				self.tables[tableName] = entity;
				return entity;
			}
		});
		return entity;
	},

	self.getTable = function(tableName) {
		var table = self.tables[tableName];
		return typeof table !== 'undefined' ? table : null;
	}
}

module.exports = Database;