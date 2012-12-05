var map = L.map('map').setView([37.8, -96], 4);

var cloudmade = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
	key: 'e6e22dcc8e474b679084e83b0a0845fc',
	styleId: 22677
}).addTo(map);

L.geoJson(statesData).addTo(map);