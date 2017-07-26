
module.exports = function(app){
  
  
  
  app.route('/').get(function(req, res){
    res.sendFile(process.cwd()+'/views/index.html');
  });
  
  app.route('/whoami').get(function(req, res){
    var json = {
    "IP address": req.headers['x-forwarded-for'].split(",")[0],
    "Language": req.headers['accept-language'].split(",")[0],
    "Software": req.headers['user-agent'].split("(")[1].split(")")[0]
  };
    
    
    
    res.send(json);
    
  });
  
};
