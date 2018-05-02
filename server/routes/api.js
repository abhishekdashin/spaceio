const express = require('express');
const router = express.Router();
const http = require('http');
var request = require('request');

router.get('/hue/:state', function(req, res){
var httpOptions = {
     baseUrl: 'http://192.168.1.115:8000',
     uri: '/api/1a6048eb59295b71a56be8532cf1eca/lights/3/state',
     headers: {
         'Content-Type': 'application/json'
     },
     method: 'PUT',
     body: {on: req.params.state},
     json: true,
 };

  request(httpOptions, function (error, response, body) {
    if(error) { res.send('Error ' + error) }
    res.json(body);
  });
});

module.exports = router;
