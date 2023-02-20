# Italian Cookies
**Italian Cookies** is a Cookie Clicker mod that adds 5 (+1 joke) upgrades based on 5 very famous Italian brand biscuits.

## How does it work?
Italian Cookies will add a Prestige Upgrade ("Box of Italian Cookies") that will unlock the cookie upgrades.

# Usage

## Cookie Clicker Mod Manager
Add the following link in the CCMM menu
```
https://atomicdonuts.github.io/ItalianCookies/ItalianCookies.js
```
## Bookmarklet
Copy this code and save it as a bookmark. Paste it in the URL section. To activate, click the bookmark when the Cookie Clicker game is open.

```javascript
javascript: (function () {
	Game.LoadMod('https://atomicdonuts.github.io/ItalianCookies/ItalianCookies.js');
}());
```
## Userscript

ItalianCookies can also be activeted via script in *Tampermonkey* (or *Greasemonkey*).This script will automatically load *ItalianCookies* every time the original game loads. Check your browsers/plugin's documentation for how to add a userscript. This script is courtesy of **[SearchAndDestroy](https://github.com/SearchAndDestroy)**.

```javascript
// ==UserScript==
// @name        Italian Cookies
// @namespace   https://github.com/AtomicDonuts/Italian Cookies
// @include     http://orteil.dashnet.org/cookieclicker/
// @include     https://orteil.dashnet.org/cookieclicker/
// @version     1.0
// @author      AtomicDonuts
// @grant       none
// ==/UserScript==

var code = "(" + (function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod('https://atomicdonuts.github.io/ItalianCookies/ItalianCookies.js');
            clearInterval(checkReady);
        }
    }, 1000);
}).toString() + ")()";

window.eval(code);
```

# Bugs and suggestions
Since I'm not a programmer,the script probably have a bad syntax and have some bugs.
If you have suggestions or just want to report some bug,you can use the issue tab on Github .

# Contributors
* **[AtomicDonuts](https://github.com/AtomicDonuts)**: Original author
* **[SearchAndDestroy](https://github.com/SearchAndDestroy)**: Tampermonkey script
