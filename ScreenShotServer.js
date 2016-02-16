"use strict";
var port, server, service,
    system = require('system');
var url = '';

if (system.args.length !== 2) {
    console.log('Usage: ScreenShotServer.js <portnumber>');
    phantom.exit(1);
} else {
    port = system.args[1];
    server = require('webserver').create();

    service = server.listen(port, function (request, response) {

        console.log('Request at ' + new Date());
        console.log(JSON.stringify(request, null, 4));

        url = decodeURIComponent(request.url).substring(6); //Dirty hack assuming only one parameter named url 
		var page = require('webpage').create();
		var base64;

		/*page.onConsoleMessage = function(msg, lineNum, sourceId) {
		  //Do Nothing
		};
		page.onError = function(msg, trace) {
		//Do Nothing
		};*/

		page.viewportSize = {width: 1280, height: 960};

		page.open(url, function() {
			page.evaluate(function() {
			  var style = document.createElement('style'),
				  text = document.createTextNode('body { background: #ffffff }');
			  style.setAttribute('type', 'text/css');
			  style.appendChild(text);
			  document.head.insertBefore(style, document.head.firstChild);
			});
			base64 = page.renderBase64('png');

		var result = atob(base64);

        response.statusCode = 200;
		response.setEncoding("binary");
        response.headers = {
        		'Content-disposition': 'attachment; filename=screenshot.png',
                'Connection': 'Keep-Alive',
                'Accept-Ranges': 'bytes',
                'Content-Type': 'image/png',
                'Content-Length': result.length
        };
        response.write(result);
        response.close();

		});



        //response.close();
    });

    if (service) {
        console.log('Web server running on port ' + port);
    } else {
        console.log('Error: Could not create web server listening on port ' + port);
        phantom.exit();
    }
}