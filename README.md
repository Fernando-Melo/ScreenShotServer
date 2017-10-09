Web Server that takes Screenshots and returns a .png image to the browser.

<b>Note:</b> you need to install PhantomJS version 1.98 or below


#Running ScreenShotServer Web server
 <b>Usage:</b> phantomjs ScreenShotServer.js < portnumber > 

 <b>Example:</b> phantomjs ScreenShotServer.js 8181

#Requiring a Screenshot

 <b>Example:</b> http://localhost:8181/?url=http://google.pt 
 
 <b>Usage:</b> http://localhost:<portnumber>/?url= < urlEncoded > 

<b> < urlEncoded > </b> - The url to take a screenshot should be escaped using the [javascript function encodeURIComponent](http://www.w3schools.com/jsref/jsref_encodeuricomponent.asp)

<b>Optional parameters:</b>
- <b>width</b> - width in pixels of the screenshot rendering
- <b>height</b> - height in pixels of the screenshot rendering

<b>Example:</b> http://localhost:8181/?url=http://google.pt&width=1920&height=1080 
