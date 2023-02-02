var express = require("express");
var router = express.Router();
const connection = require("../db");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const postData = req.body;
  console.log(postData, "post Data");
  connection.query(
    "INSERT INTO newsistic (news_title, author, created_at) VALUES ?",
    [postData.map((item) => [item.title, item.author, item.created_at])],
    (error, results) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.send({
        message: "Post created successfully",
        results: results,
        data: postData,
      });
    }
  );
});

module.exports = router;
