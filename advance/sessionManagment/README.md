# Session Managment
 - Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
 - 



## Parameter
 - The __*httpOnly*__ flag ensures that the cookie is not accessible to JavaScript code running on the browser, foiling the attempts to steal it by using XSS attack.
 - The __*secure flag*__ ensures that the cookie is transmitted only on a secure HTTPS connection.
 - __*logout button*__ : destroy active session, 

##  express-session VS cookie-session
 - __*express-session*__ is more abstract, it supports different session stores (like files, DB, cache and whatnot).
 - __*cookie-session*__ is a simple / lightweight cookie-based (cookie is the only storage engine supported: all the session info is stored on the client, in a cookie) session implementation. 

## req.session VS res.cookie
Cookies allow you to store a user’s information inside a file on their browser. The browser then sends that info back on every request

 -  __*res.cookie*__ adds a cookie to the response
 - __*req.session*__ is a server-side key/value store, lives in server memory by default


 ## Remark
  Session should have:
   - Session ID
   - Session ID Name 
   - Session ID Length: must be long enough to prevent brute force attacks(at least 128 bits (16 bytes)
   - Session ID Content (or Value)

## Reference
 - [npm](https://www.npmjs.com/package/express-session)
 - [session](https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions)
 - [https://www.owasp.org/index.php/Session_Management_Cheat_Sheet#Session_ID_Properties](https://www.owasp.org/index.php/Session_Management_Cheat_Sheet#Session_ID_Properties)