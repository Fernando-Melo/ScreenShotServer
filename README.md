# Web Server that takes Screenshots and returns a .png image to the browser.

**Note:** you need to install PhantomJS version 1.98 or below


## Running ScreenShotServer Web server
 
**Usage 1:** 
```
phantomjs ScreenShotServer.js < portnumber >
```
 
**Usage 2:** 
```
phantomjs ScreenShotServer.js < portnumber > < rootDomain >
```

**Example 1:**
```
phantomjs ScreenShotServer.js 8181
```
 
**Example 2:**
```
phantomjs ScreenShotServer.js 8181 google.pt
```

## Requiring a Screenshot

**Example:** 
http://localhost:8181/?url=http://google.pt 
 
**Usage:** 
http://localhost:<portnumber>/?url= < urlEncoded > 

**urlEncoded** - The url to take a screenshot should be escaped using the [javascript function encodeURIComponent](http://www.w3schools.com/jsref/jsref_encodeuricomponent.asp)

**Optional parameters:**
- **width** - width in pixels of the screenshot rendering
- **height** - height in pixels of the screenshot rendering

**Example:** http://localhost:8181/?url=http://google.pt&width=1920&height=1080 
