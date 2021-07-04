const express = require('express');
const app = express()
const cors = require('cors')
let sequelize = require('./sequelize');

async function server () {
	app.use(cors())

	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))
	
	await sequelize.authenticate();

	app.get('/', async (req, res) => {
		const users = await sequelize.models.user.findAll()
		try {
			res.json({ users })
		} catch (err) {
			res.json({ error: err })
		}
	})

	app.post('/form', async (req, res) => {
		await sequelize.models.user.create(req.body)
		res.json({ status: 'OK', message: 'Envoie du livre blanc' })
	})
	
	app.listen(process.env.PORT || 8281, () => console.log(`Listen on port ${process.env.PORT || 8281}`))
}

server()