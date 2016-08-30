// Digistar Script 
// Created: 8/30/2016

var data = '{"fadeIn":{"red":{"1":{"20":"01","40":"03","60":"05","80":"07","100":"09"},"5":{"20":"0B","40":"0D","60":"0F","80":"11","100":"13"},"15":{"20":"15","40":"17","60":"19","80":"1B","100":"1D"},"30":{"20":"1F","40":"21","60":"23","80":"25","100":"27"}},"green":{"1":{"20":"29","40":"2B","60":"2D","80":"2F","100":"31"},"5":{"20":"33","40":"35","60":"37","80":"39","100":"3B"},"15":{"20":"3D","40":"3F","60":"41","80":"43","100":"45"},"30":{"20":"47","40":"49","60":"4B","80":"4D","100":"4F"}},"blue":{"1":{"20":"51","40":"53","60":"55","80":"57","100":"59"},"5":{"20":"5B","40":"5D","60":"5F","80":"61","100":"63"},"15":{"20":"65","40":"67","60":"69","80":"6B","100":"6D"},"30":{"20":"6F","40":"71","60":"73","80":"75","100":"77"}}},"fadeOut":{"red":{"1":{"20":"02","40":"04","60":"06","80":"08","100":"0A"},"5":{"20":"0C","40":"0E","60":"10","80":"12","100":"14"},"15":{"20":"16","40":"18","60":"1A","80":"1C","100":"1E"},"30":{"20":"20","40":"22","60":"24","80":"26","100":"28"}},"green":{"1":{"20":"2A","40":"2C","60":"2E","80":"30","100":"32"},"5":{"20":"34","40":"36","60":"38","80":"3A","100":"3C"},"15":{"20":"3E","40":"40","60":"42","80":"44","100":"46"},"30":{"20":"48","40":"4A","60":"4C","80":"4E","100":"50"}},"blue":{"1":{"20":"52","40":"54","60":"56","80":"58","100":"5A"},"5":{"20":"5C","40":"5E","60":"60","80":"62","100":"64"},"15":{"20":"66","40":"68","60":"6A","80":"6C","100":"6E"},"30":{"20":"70","40":"72","60":"74","80":"76","100":"78"}}},"wipeOn":{"red":{"10":{"100":"79"}},"green":{"10":{"100":"7B"}},"blue":{"10":{"100":"7D"}},"white":{"10":{"100":"7F"}}},"wipeOff":{"red":{"10":{"100":"7A"}},"green":{"10":{"100":"7C"}},"blue":{"10":{"100":"7E"}},"white":{"10":{"100":"80"}}},"chase":{"red":{"10":{"100":"81"}},"green":{"10":{"100":"82"}},"blue":{"10":{"100":"83"}},"white":{"10":{"100":"84"}},"off":{"red":{"1":{"0":"85"}},"green":{"1":{"0":"85"}},"blue":{"1":{"0":"85"}},"white":{"1":{"0":"85"}}}}}';
var hex;
var codes = JSON.parse(data);

function lights(color, effect, intensity, duration) {
	print(color + ' ' + effect + ' ' + intensity + ' ' + duration);
	code = codes[effect][color][duration][intensity];
	sendCommandAstroFX(color, code);
}

function sendCommandAstroFX(color, code) {
	//print('astroFX command "' + color + ' ' + code + '"');
	Ds.SendStringCommand('astroFX command "' + color + ' ' + code + '"');
}
