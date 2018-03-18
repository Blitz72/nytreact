const axios = require("axios");
const router = require("express").Router();
const db = require("../models");

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

router.get("/articles", (req, res) => {
	console.log("inside router.get('/articles')")
	console.log(req.query.q);
  axios
    .get(queryURL + req.query.q)	// .get(queryURL, { params: req.query })
    .then((data) => {

    	console.log(data.data.response.docs);
    	res.json(data.data.response.docs);})
    .catch(err => res.status(422).json(err));
});

module.exports = router;
