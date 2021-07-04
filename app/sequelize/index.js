const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: '/db/wooclap.db',
});

const modelDefiners = [
	require('./stat.model'),
	require('./user.model'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;