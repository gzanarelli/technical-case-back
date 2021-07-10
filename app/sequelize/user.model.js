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
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
		},
		job_title: {
			type: DataTypes.STRING,
		},
		organisation: {
			type: DataTypes.STRING,
		},
	}).sync({ alter: true })
}
