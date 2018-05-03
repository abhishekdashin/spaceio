const express = require('express');
const router = express.Router();
const http = require('http');
var request = require('request');

router.get('/hue/:state', function(req, res){
    var httpOptions = {
        baseUrl: 'http://192.168.1.115:8000',
        uri: '/api/0f41beaa7cf6b17a57145fc05578e0b/lights/3/state',
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

router.get('/temperature', function(req, res){
    var httpOptions = {
        baseUrl: 'https://developer-api.nest.com',
        uri: '/devices/thermostats/HuZeG5M6xzh7ROeRPNmlCaNCyl4_3U7o/target_temperature_f',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer c.2b98aOtKj0Ng3fhEHMUUqC5H4lSosgJKsJDU6N09erSLEg7m7GvC8z28gzUXb4FXfrG2zV4zoBLlvApJsLWd5fXOgEqTBJpNYaSJzmE8VQXzBt0SQP0diPEEz67rogSvPtagX8ZWPBjDHQLG',
        },
        method: 'GET',
        json: true,
    };

  request(httpOptions, function (error, response, body) {
    if(error) { res.send('Error ' + error) }
    res.json(body);
  });
});

router.get('/humidity', function(req, res){
    var httpOptions = {
        baseUrl: 'https://developer-api.nest.com',
        uri: '/devices/thermostats/HuZeG5M6xzh7ROeRPNmlCaNCyl4_3U7o/humidity',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer c.2b98aOtKj0Ng3fhEHMUUqC5H4lSosgJKsJDU6N09erSLEg7m7GvC8z28gzUXb4FXfrG2zV4zoBLlvApJsLWd5fXOgEqTBJpNYaSJzmE8VQXzBt0SQP0diPEEz67rogSvPtagX8ZWPBjDHQLG',
        },
        method: 'GET',
        json: true,
    };

  request(httpOptions, function (error, response, body) {
    if(error) { res.send('Error ' + error) }
    res.json(body);
  });
});


router.get('/ac', function(req, res){
    var httpOptions = {
        baseUrl: 'https://developer-api.nest.com',
        uri: '/devices/thermostats/HuZeG5M6xzh7ROeRPNmlCaNCyl4_3U7o/hvac_state',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer c.2b98aOtKj0Ng3fhEHMUUqC5H4lSosgJKsJDU6N09erSLEg7m7GvC8z28gzUXb4FXfrG2zV4zoBLlvApJsLWd5fXOgEqTBJpNYaSJzmE8VQXzBt0SQP0diPEEz67rogSvPtagX8ZWPBjDHQLG',
        },
        method: 'GET',
        json: true,
    };

  request(httpOptions, function (error, response, body) {
    if(error) { res.send('Error ' + error) }
    res.json(body);
  });
});

router.get('/actemp/:temperature', function(req, res) {
    var httpOptions = {
        baseUrl: 'https://developer-api.nest.com',
        uri: '/devices/thermostats/HuZeG5M6xzh7ROeRPNmlCaNCyl4_3U7o',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer c.2b98aOtKj0Ng3fhEHMUUqC5H4lSosgJKsJDU6N09erSLEg7m7GvC8z28gzUXb4FXfrG2zV4zoBLlvApJsLWd5fXOgEqTBJpNYaSJzmE8VQXzBt0SQP0diPEEz67rogSvPtagX8ZWPBjDHQLG',
        },
        body: {target_temperature_f: Number(req.params.temperature)},
        method: 'PUT',
        json: true,
    };

    console.log(httpOptions);

  request(httpOptions, function (error, response, body) {
    if(error) { res.send('Error ' + error) } console.log(body);
    res.json(body);
  });
});

module.exports = router;
