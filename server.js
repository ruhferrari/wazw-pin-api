var app = require("./custom-express")();

app.listen(8080, function () {
	console.log("Server online. Go to http://localhost:8080/geolocations to insert geolocation.");
});