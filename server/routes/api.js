const router = express.Router();

router.get('/hue', function(req, res){
  httpOptions.uri = 'http://localhost:8000/api/1a6048eb59295b71a56be8532cf1eca/lights/3/state';
  httpOptions.method = 'PUT';
  httpOptions.body = '{on:false}'

  request(httpOptions, function (error, response, body) {
    if(error) { res.send('Error ' + error) }
    res.json(body);
  });
});

module.exports = router;
