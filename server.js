var express = require("express"), 
app = express();

app.get("/", function(req, res) {
	res.send("hello universe!");
});
var quote = ["inspir1", "inspir2", "inspir3", "inspir4"];
app.get("/inspiration", function(req, res) {
	var randomIndex = Math.floor(Math.random() * quote.length);
	res.send(quote[randomIndex]);
});

var jokes = [{setup: "setup1", punchline: "punchline1"},
						 {setup: "setup2", punchline: "punchline2"},
						 {setup: "setup3", punchline: "punchline3"}];
app.get("/joke", function(req, res) {
	var randomIndex = Math.floor(Math.random() * jokes.length);
	res.send(jokes[randomIndex]);
})

console.log("server starting. available at http://localhost:3000");
app.listen(3000);
