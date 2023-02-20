ItalianCookies = 
{
    modname: "Italian Cookies",
    init:function(){
        ItalianCookies.newprestigeupg();
        ItalianCookies.newupgrades(); 
        ItalianCookies.notify("Italian Cookies is loaded <q>Mamma Mia!</q>");
        if(Game.bakeryName === "Pascal") {Game.Upgrades["AtomicDonut"].unlocked = 1;Game.Upgrades["AtomicDonut"].bought=1;ItalianCookies.notify("Hey, its me! <q>Is it dough?</q>")}

    },
    save:function(){
        ItalianCookies.savestate();
        return JSON.stringify(ItalianCookies.saveobj)
    },
    load:function(str){
        var data=JSON.parse(str);
        if(data.box)                    {Game.Upgrades["Box of Italian Cookies"].unlocked = 1;   Game.Upgrades["Box of Italian Cookies"].bought=1 }
        if(data.stardust)               {Game.Upgrades["Stardust Cookies"].unlocked = 1;         Game.Upgrades["Stardust Cookies"].bought=1 }
        if(data.pingo)                  {Game.Upgrades["Pingo"].unlocked = 1;                    Game.Upgrades["Pingo"].bought=1 }
        if(data.littlebuttons)          {Game.Upgrades["Little Buttons"].unlocked = 1;           Game.Upgrades["Little Buttons"].bought=1 }
        if(data.cuddly)                 {Game.Upgrades["Cuddly"].unlocked = 1;                   Game.Upgrades["Cuddly"].bought=1 }
        if(data.dropplet)               {Game.Upgrades["Dropplet"].unlocked = 1;                 Game.Upgrades["Dropplet"].bought=1 }
        if(data.donut)                  {Game.Upgrades["AtomicDonut"].unlocked = 1;              Game.Upgrades["AtomicDonut"].bought=1 }
        //console.log("IC SaveFile Loaded")
        //console.log(data)
    },
    cookieprice: 999999999999999*5,//Same price as the Box of Brand Cookies
    //piconURL: "https://i.imgur.com/Lq2bpNK.png", v1
    //piconURL: "https://i.imgur.com/od1L0OJ.png", v2 i dont really like the box pixelart, i will change it asap
    piconURL: "https://i.imgur.com/ElTSiOW.png", //v3
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
        Game.NewUpgradeCookie({name:'Little Buttons'    ,desc:"Hazelenut cream and 5 little holes, what's better? "  ,icon:[2,0,ItalianCookies.piconURL]  ,power:2,	price:	ItalianCookies.cookieprice*100      ,require: "Box of Italian Cookies"});Game.last.order = 10030 + 0.001 * Game.last.id; ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Cuddly'            ,desc:'Just like real cuddles, they are irresistible.'      ,icon:[3,0,ItalianCookies.piconURL]  ,power:3,	price:	ItalianCookies.cookieprice*1000     ,require: "Box of Italian Cookies"});Game.last.order = 10030 + 0.001 * Game.last.id; ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'Dropplet'          ,desc:'Why limit yourself to circular cookies.'             ,icon:[4,0,ItalianCookies.piconURL]  ,power:3,	price:	ItalianCookies.cookieprice*10000    ,require: "Box of Italian Cookies"});Game.last.order = 10030 + 0.001 * Game.last.id; ItalianCookies.CookiesUpgradeMade.push(Game.last)
        Game.NewUpgradeCookie({name:'AtomicDonut'       ,desc:"It's me! They said i could be anything so i became a CookieClicker Upgrade."             ,icon:[1,1,ItalianCookies.piconURL]  ,power:5,	price:	ItalianCookies.cookieprice*19980107    ,require: "Box of Italian Cookies"});Game.last.order = 10030 + 0.001 * Game.last.id; ItalianCookies.CookiesUpgradeMade.push(Game.last)
        LocalizeUpgradesAndAchievs() 
        for (var i in ItalianCookies.CookiesUpgradeMade){
            Game.cookieUpgrades.push(ItalianCookies.CookiesUpgradeMade[i]); //to active the cps calculation
        }
		for (var i in Game.UnlockAt){Game.Upgrades[Game.UnlockAt[i].name].unlockAt=Game.UnlockAt[i];} //for the tooltips in the menu
    },
    notify: function(text) {
        console.log("ItalianCookies: "+text);
        Game.Notify("ItalianCookies",text,[2,1,ItalianCookies.piconURL]); //Flag Icon WIP
      },
    saveobj: {
        box: 0,
        stardust: 0,
        pingo: 0,
        littlebuttons: 0,
        cuddly: 0,
        dropplet: 0,
        donut: 0,
    },
    savestate: function(){

        if( Game.Upgrades["Box of Italian Cookies"].bought == 1) ItalianCookies.saveobj.box = 1
        if( Game.Upgrades["Stardust Cookies"].bought == 1) ItalianCookies.saveobj.stardust = 1
        if( Game.Upgrades["Pingo"].bought == 1) ItalianCookies.saveobj.pingo = 1
        if( Game.Upgrades["Little Buttons"].bought == 1) ItalianCookies.saveobj.littlebuttons = 1
        if( Game.Upgrades["Cuddly"].bought == 1) ItalianCookies.saveobj.cuddly = 1
        if( Game.Upgrades["Dropplet"].bought == 1) ItalianCookies.saveobj.dropplet = 1
        if( Game.Upgrades["AtomicDonut"].bought == 1) ItalianCookies.saveobj.donut = 1
    },
    
}
Game.registerMod(ItalianCookies.modname,ItalianCookies);
