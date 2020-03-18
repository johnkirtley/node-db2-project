exports.up = function(knex) {
	return knex.schema.dropColumn('cars', tbl => {
		tbl.string('transmission type');
		tbl.string('title status');
	});
};

exports.down = function(knex) {};
