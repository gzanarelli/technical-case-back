const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');
const path = require('path')

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: path.join(__dirname, '../wooclap.sqlite3'),
	define: {
		timestamps: false
	}
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