const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('stat', {
		id : {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		nb_created_events: {
			type: DataTypes.INTEGER,
		},
		nb_created_questions: {
			type: DataTypes.INTEGER,
		},
		nb_collected_answers: {
			type: DataTypes.INTEGER,
		},
		user_id: {
			type: DataTypes.INTEGER,
		}
	}).sync({ alter: true })
}
