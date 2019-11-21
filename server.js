var http = require("http");
var httpProxy = require("http-proxy");

var drinkkiruletti = new httpProxy.createProxyServer({
	target: {
	host: "localhost",
	port: 3000
	}
});
var karhukopla = new httpProxy.createProxyServer({
	target: {
	host: "localhost",
	port: 4000
	}
});

http.createServer(function(req,res) {
	if (req.headers.host === "www.epi.fi"){
		drinkkiruletti.proxyRequest(req,res);
		drinkkiruletti.on("error", function(err, req, res) {
			if(err) console.log(err);
			res.writeHead(500);
			res.end("shit");
		});
	}else if(req.headers.host === "www.karhukopla.epi.fi") {
		karhukopla.proxyRequest(req,res);
		karhukopla.on("error", function(err,req,res) {
			if(err) console.log(err);
			res.writeHead(500);
			res.end("shit shit");
		});
	}
}).listen(80);
