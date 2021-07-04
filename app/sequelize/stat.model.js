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
			allowNull: false,
			autoIncrement: false,
			primaryKey: false,
			type: DataTypes.INTEGER,
		},
		nb_created_questions: {
			allowNull: false,
			autoIncrement: false,
			primaryKey: false,
			type: DataTypes.INTEGER,
		},
		nb_collected_answers: {
			allowNull: false,
			autoIncrement: false,
			primaryKey: false,
			type: DataTypes.INTEGER,
		},
	})
}
