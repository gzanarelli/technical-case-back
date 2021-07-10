function applyExtraSetup(sequelize) {
	const { user, stat } = sequelize.models;

	stat.belongsTo(user, { foreignKey: 'user_id' });
}

module.exports = { applyExtraSetup };