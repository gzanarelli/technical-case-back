const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('user', {
		id : {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		email_address: {
			allowNull: false,
			autoIncrement: false,
			primaryKey: false,
			type: DataTypes.STRING,
		},
		name: {
			allowNull: false,
			autoIncrement: false,
			primaryKey: false,
			type: DataTypes.STRING,
		},
		job_title: {
			allowNull: false,
			autoIncrement: false,
			primaryKey: false,
			type: DataTypes.STRING,
		},
		organisation: {
			allowNull: false,
			autoIncrement: false,
			primaryKey: false,
			type: DataTypes.STRING,
		}
	})
}
