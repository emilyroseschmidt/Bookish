const pgp = require("pg-promise")();
const connectionString = require("../config.js");
const db = pgp(connectionString);

module.exports = db;