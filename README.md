Web Server that takes Screenshots and returns a .png image to the browser.

<b>Note:</b> you need to install PhantomJS version 1.98 or below


#Running ScreenShotServer Web server
 <b>Usage</b>: phantomjs ScreenShotServer.js < portnumber > 

 <b>Example</b>: phantomjs ScreenShotServer.js 8181

#Requiring a Screenshot

 Example: http://localhost:8181/?url=http://google.pt 
 
 Usage: http://localhost:<portnumber>/?url= < urlEncoded > 

<b> < urlEncoded > </b> - The url to take a screenshot should be escaped using the [javascript function encodeURIComponent](http://www.w3schools.com/jsref/jsref_encodeuricomponent.asp)
