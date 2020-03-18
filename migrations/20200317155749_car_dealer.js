exports.up = function(knex) {
	return knex.schema.createTable('cars', tbl => {
		tbl.increments();

		tbl.integer('vin').unique();
		tbl.string('make', 35).index();
		tbl.string('model', 35).index();
		tbl.integer('mileage');
	});
};

exports.down = function(knex) {};
