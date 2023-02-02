const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "aws.connect.psdb.cloud",
  user: "93lztfp46u8mafn9aa04",
  password: "pscale_pw_jpB3WIoDoOMSPLekZKRqyOhp5i9RLgtuK2yUg6QC7oL",
  database: "news_api",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = connection;
