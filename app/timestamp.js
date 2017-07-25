module.exports = function(app){
  
  var json = {
    "unix": null,
    "natural": null
  }
  
  app.route('/', function(req, res){
    res.sendFile(process.cwd()+'views/index.html');
  });
  
  app.route('/:query', function(req, res){
    var query = req.params.query;
    
    if (!Number(query) && new Date(query) == 'Invalid Date'){
      res.send(json);
    }
    
    if (Number(query)) {
      var unix = query;
      unixToNatural(query);
    }
    
    else {
      var natural = query;
      naturalToUnix(query);
    }
    
    function unixToNatural(query){
      
    }
    
    function naturalToUnix(query){
      var unix = query.getTime();
    }
    
    
  });
  
};
