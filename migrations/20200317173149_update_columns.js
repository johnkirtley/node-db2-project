exports.up = function(knex) {
	return knex.schema.renameColumn('cars', tbl => {
		tbl.string('transmission type', 'transmission-type').index();
		tbl.string('title status', 'title-status').index();
	});
};

exports.down = function(knex) {};
