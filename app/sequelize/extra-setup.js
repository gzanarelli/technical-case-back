function applyExtraSetup(sequelize) {
	const { user, stat } = sequelize.models;

	stat.belongsTo(user);
}

module.exports = { applyExtraSetup };