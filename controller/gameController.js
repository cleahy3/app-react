var request = require('request');
var path = require('path');
function index(req,res){
  res.sendFile('index.html', { root: path.join(__dirname, '../app') });
}
function getDeal(req,res){
request('http://178.62.86.6/api/deal', function (error, response, body) {
  if (!error && response.statusCode == 200) {
   // Show the HTML for the Google homepage. 
  }

res.send(response.body);
})}
function setGame(req,res){
  console.log(req.body);
request.post('http://178.62.86.6/api/game',{form:{ name:req.body.name}})

  res.send('set');
}
function endGame(req,res){
	request('http://178.62.86.6/api/end', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
  console.log(response.body);
  res.send(response.body);
})}

module.exports={
  index: index,
	deal: getDeal,
	end: endGame,
	game: setGame
}