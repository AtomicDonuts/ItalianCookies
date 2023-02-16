ItalianCookies = 
{
    modname: "Italian Cookies",
    init:function(){
        //Game.registerHook('create',function(){Game.mods[ItalianCookies.modname].newupgrade();}); //Create Hooks doesnt work with CCMM :c
        ItalianCookies.newprestigeupg();
        ItalianCookies.newupgrades(); 

        ItalianCookies.notify("Italian Cookies is loaded <q>Mamma Mia!</q>")
    },
    save:function(){
        //WIP
    },
    load:function(str){
        //WIP
    },
    cookieprice: 999999999999999*5,//Same price as the Box of Brand Cookies' cookies
    //piconURL: "https://i.imgur.com/Lq2bpNK.png", v1
    piconURL: "https://i.imgur.com/od1L0OJ.png", //v2 i dont really like the box pixelart, i will change it asap
    CookiesUpgradeMade: [],
    newprestigeupg:function(){
        new Game.Upgrade('Box of Italian Cookies',"Box of famous Italian brand cookies <q>Alberto! Come at look at the cookies!.</q>",500,[0,1,ItalianCookies.piconURL]); BoIC = Game.last
        BoIC.pool='prestige';
        BoIC.parents=[Game.Upgrades["Box of brand biscuits"]];
        BoIC.posX = -70
        BoIC.posY = -366
        LocalizeUpgradesAndAchievs()
        Game.PrestigeUpgrades.push(Game.UpgradesById[BoIC.id]);
    },
    newupgrades:function(){ 
        Game.NewUpgradeCookie({name:'Stardust Cookies'  ,desc:'Bootlegging it, it lost one of the 11 iconic stars.' ,icon:[0,0,ItalianCookies.piconURL]  ,power:3,	price:	ItalianCookies.cookieprice          ,require: "Box of Italian Cookies"});Game.last.order = 10030 + 0.001 * Game.last.id; ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Pingo'             ,desc:'Do you Pingo?'                                       ,icon:[1,0,ItalianCookies.piconURL]  ,power:2,	price:	ItalianCookies.cookieprice*10       ,require: "Box of Italian Cookies"});Game.last.order = 10030 + 0.001 * Game.last.id; ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Little Button'     ,desc:"Hazelenut cream and 5 little hole, what's better? "  ,icon:[2,0,ItalianCookies.piconURL]  ,power:2,	price:	ItalianCookies.cookieprice*100      ,require: "Box of Italian Cookies"});Game.last.order = 10030 + 0.001 * Game.last.id; ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Cuddly'            ,desc:'Just like real cuddles, they are irresistible.'      ,icon:[3,0,ItalianCookies.piconURL]  ,power:3,	price:	ItalianCookies.cookieprice*1000     ,require: "Box of Italian Cookies"});Game.last.order = 10030 + 0.001 * Game.last.id; ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Dropplet'          ,desc:'Why limit yourself to circular cookies.'             ,icon:[4,0,ItalianCookies.piconURL]  ,power:3,	price:	ItalianCookies.cookieprice*10000    ,require: "Box of Italian Cookies"});Game.last.order = 10030 + 0.001 * Game.last.id; ItalianCookies.CookiesUpgradeMade.push(Game.last)
        LocalizeUpgradesAndAchievs() 
        for (var i in ItalianCookies.CookiesUpgradeMade){
            Game.cookieUpgrades.push(ItalianCookies.CookiesUpgradeMade[i]); //to active the cps calculation
        }
		for (var i in Game.UnlockAt){Game.Upgrades[Game.UnlockAt[i].name].unlockAt=Game.UnlockAt[i];} //for the tooltips in the menu
    },
    notify: function(text) {
        console.log("ItalianCookies: "+text);
        Game.Notify("ItalianCookies",text,[0,1,ItalianCookies.piconURL]); //Flag Icon WIP
      },
    
}
Game.registerMod(ItalianCookies.modname,ItalianCookies);

