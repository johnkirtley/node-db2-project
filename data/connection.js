const knex = require('knex');
const knexfile = require('../knexfile');

const db = knexfile.development;

module.exports = knex(db);
