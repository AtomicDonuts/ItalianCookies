
# Italian Cookies


Italian Cookies is a Cookie Clicker mod that adds 5 (+1 joke) upgrades based on 5 very famous Italian brand biscuits.
To get them unlocked you need to ascend and get the "Box of Italian Cookies" heavenly upgrade. Then they will be available to buy. The price of each cookies is based on the Box of brand biscuits's cookies, arround 1-1000 Quadrilion.

##  Trivia
All the cookies in this mod are based on real cookies made by different companies in Italy.
Since I'm an huge nerd and I have a desperate need to explain every joke I make, here's a brief description of all of them.

### Introduction - What's "Pasta Frolla"
In Italy the majority of breakfast cookies are made with "Pasta Frolla". Browsing about it i didn't find any American equivalent of that. The most similar thing i found is "shortcrust pastry", but they are definitly not the same thing (even if Google Translate says so). "Pasta Frolla" is made with eggs too and the processing is different enough to make the cookies ("Frollini" literally "little Frolla") crumbly enough to make them soaked with milk when you dunk them in (the majority of italian people prefer a sweet breakfast other then a salty one). 


### Pan di Stelle (Stardust Cookies)
"Pan di Stelle" (literally Star's Bread) are "frollini" made with hazelnuts and fresh milk, frosted with 11 little sugar stars (hence the name) and a drop of honey. They are definitly one of the two most famous and delicous cookies in Italy, so much that even other biscuit companies makes similar "bootlegged" version of it. (They are 100% my favourite too)

### Gocciole (Dropplet)
"Gocciole" (it's an assonance with the italian word for "drop") are "frollini" with chocolate chips. Their unmistakable droplet-like shape and their remarkable taste makes them one of the two most famous biscuit brands in italy, so much that even other biscuit companies makes similar "bootlegged" version of it. 

### Ringo (Pingo)
"Ringo"s are made from two different cookies pieces, one vanilla and one cacao flavored, with a milk flavored filling. The cookies pieces are embossed with an "R". The name is a reference to "Ringo Starr", the "Beatles" one. It was an attempt to bring the teenagers of the time (early 60s) closer to the product.

### Baiocchi (Little Buttons)
"Baiocchi" are made from two different "frolla" pieces, each with five little holes and an embossed logo, filled with a delicous hazelnut cream. Even if their shape resembles that of small
buttons, the name is actually based on an old coin ("Baiocco/Baiocchi" sing/plr) used in some Italian regions in the past.

### Abbracci (Cuddly)
"Abbracci" (literally "Hugs") are bicolor donut-shape "frollini" made by two half-moon halves, one cacao flavored and the other one made with fresh milk cream. Their design resembles that of two people hugging, hence the name.
## Installation

###  Cookie Clicker Mod Manager

Add the following link in the CCMM menu
```
https://atomicdonuts.github.io/ItalianCookies/ItalianCookies.js
```
### Bookmarklet
Copy this code and save it as a bookmark. Paste it in the URL section. To activate, click the bookmark when the Cookie Clicker game is open.

```javascript
javascript: (function () {
	Game.LoadMod('https://atomicdonuts.github.io/ItalianCookies/ItalianCookies.js');
}());
```
### Userscript

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
## What about other countries?
If your country have some branded cookies that are not exported or just not that famous in other country, dm me on discord or open an Issue, we can make togheter *country* Cookies. I'm developing a little framework that will help with that!

## Authors

- [AtomicDonuts](https://www.github.com/AtomicDonuts)
- [My GF] : Spellcheck and help with the descriptions, names and artworks
- [SearchAndDestroy](https://github.com/SearchAndDestroy): Tampermonkey script
- [DashNet](https://dashnet.org/): Mod API
