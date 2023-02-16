ItalianCookies = 
{
    modname: "Italian Cookies",
    init:function(){
        //Game.registerHook('create',function(){Game.mods[ItalianCookies.modname].newupgrade();}); 
        Game.mods[ItalianCookies.modname].newupgrade(); //Since it doesnt work yet
    },
    save:function(){
        //WIP
    },
    load:function(str){
        //WIP
    },
    cookieprice: 10,
    piconURL: "https://i.imgur.com/Lq2bpNK.png",
    CookiesUpgradeMade: [],
    newupgrade:function(){ 
        Game.NewUpgradeCookie({name:'Stardust Cookies'  ,desc:'Bootlegging it, it lost one of the 11 iconic stars.' ,icon:[0,0,ItalianCookies.piconURL]  ,power:3,	price:	ItalianCookies.cookieprice          ,}); ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Pingo'             ,desc:'Do you Pingo?'                                       ,icon:[1,0,ItalianCookies.piconURL]  ,power:2,	price:	ItalianCookies.cookieprice*10       ,}); ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Little Button'     ,desc:"Hazelenut cream and 5 little hole, what's better? "  ,icon:[2,0,ItalianCookies.piconURL]  ,power:2,	price:	ItalianCookies.cookieprice*100      ,}); ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Cuddly'            ,desc:'Just like real cuddles, they are irresistible.'      ,icon:[3,0,ItalianCookies.piconURL]  ,power:3,	price:	ItalianCookies.cookieprice*1000     ,}); ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Dropplet'          ,desc:'Why limit yourself to circular cookies.'             ,icon:[4,0,ItalianCookies.piconURL]  ,power:3,	price:	ItalianCookies.cookieprice*10000    ,}); ItalianCookies.CookiesUpgradeMade.push(Game.last)
        LocalizeUpgradesAndAchievs()
        for (var i in ItalianCookies.CookiesUpgradeMade){
            Game.cookieUpgrades.push(ItalianCookies.CookiesUpgradeMade[i]);
        }
    },
    
}
Game.registerMod(ItalianCookies.modname,ItalianCookies);
