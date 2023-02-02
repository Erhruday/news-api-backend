var express = require("express");
var router = express.Router();
const connection = require("../db");

/* GET users listing. */
router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM newsistic", (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(results);
  });
  // res.send('respond with a resource');
});

module.exports = router;
