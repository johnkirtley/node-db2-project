exports.seed = async function(knex) {
	const testData = [
		{ vin: 17584756, make: 'Tesla', model: 'Model S', mileage: 76452 },
		{ vin: 19673846, make: 'Honda', model: 'Civic', mileage: 76452 },
		{ vin: 19762534, make: 'Ferrari', model: 'California', mileage: 76452 },
		{ vin: 10293847, make: 'Maserati', model: 'Ghibli', mileage: 76452 },
		{ vin: 56483920, make: 'Lamborghini', model: 'Aventador', mileage: 76452 },
		{ vin: 60183958, make: 'Honda', model: 'Elantra', mileage: 76452 },
		{ vin: 18923458, make: 'Nissan', model: 'Leaf', mileage: 76452 },
		{ vin: 10987264, make: 'Jeep', model: 'Wrangler', mileage: 76452 },
		{ vin: 11748859, make: 'Toyota', model: 'Tacoma', mileage: 76452 },
		{ vin: 10299937, make: 'Mitsubishi', model: 'Lancer', mileage: 76452 }
	];

	await knex('cars').truncate();

	return knex('cars').insert(testData);
};
