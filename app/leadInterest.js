const Promise = require('bluebird')
const { Sequelize } = require('./sequelize')
const Op = Sequelize.Op

const targets = [
	{ name: "Stanford University", domain: "%stanford.edu" },
	{ name: "MIT", domain: "%mit.edu" },
	{ name: "Yale University", domain: "%yale.edu" },
	{ name: "Princeton University", domain: "%princeton.edu" }
]

module.exports = async (sequelize) => {
	let results = {}
	return Promise.each(targets, async target => {
			const university = await sequelize.models.user.findAndCountAll({
			where: { email_address: { [Op.like]: target.domain } }
		})
		results = {
			...results,
			[target.name]: university.count
		}
		if (university.count >= 10) {
			Promise.each(university.rows, async user => {
				if (!user?.dataValues?.organisation) {
					const stats = await sequelize.models.stat.findOne({ where: {user_id: user?.dataValues?.id}})
					console.log(stats)
				}
			})
		}
	}).then(() => {
		return results
	})
}