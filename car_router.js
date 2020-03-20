const express = require('express');
const db = require('./data/connection');

const router = express.Router();

router.get('/', (req, res) => {
	db('cars')
		.then(car => {
			res.status(201).json(car);
		})
		.catch(err => {
			console.log(err);
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	db('cars')
		.where({ id: id })
		.then(car => {
			res.status(201).json(car);
		})
		.catch(err => console.log(err));
});

router.post('/', (req, res) => {
	const carData = req.body;

	db('cars')
		.insert(carData)
		.then(car => {
			res.status(201).json(car);
		})
		.catch(err => {
			console.log('Error posting car', err);
		});
});

router.put('/:id', (req, res) => {
	const { id } = req.params;

	db('cars')
		.where({ id: id })
		.update(req.body)
		.then(car => {
			res.status(201).json(car);
		})
		.catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	db('cars')
		.where({ id: id })
		.delete()
		.then(car => {
			res.status(201).json(car);
		})
		.catch(err => console.log(err));
});

module.exports = router;
