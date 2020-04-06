const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'YOUR TOKEN HERE';


const PREFIX = '!';
bot.on('ready',() =>{
    
console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.slice(PREFIX.length).toLowerCase().trim().split(/ +/g);
    let num1,num2,precoTotal; 
    let primeiroNum,segundoNum;
    

//--------------------------------------------------------------------------------------------------
//Função Principal

    function embedMaster(rate, color,name,imgUrl){
        

    //Separação dos argumentos em args[1] usando '-' mas nao considera.
   
        //prog
            primeiroNum = parseInt(args[1])  ;
            primeiroNum--;
            num1 = verifyNumber(primeiroNum);

            segundoNum = parseInt(args[2]);
            segundoNum--;
            num2 = verifyNumber(segundoNum);

            num1 = (num2-num1); //num1 is total xp
            precoTotal = (num1 * rate);
            precoTotal = transformNumber(precoTotal);

            const allEmbed = new Discord.MessageEmbed();

            allEmbed.setColor(color)
            .setTitle('Skill xp calculator')
            .setURL('https://discord.gg/fHnArq')    // Encaminha para entrar no servidor
            .setAuthor('Alibabas server', 'https://imgur.com/UI3djmH.png', 'https://discord.gg/fHnArq')
            .setDescription('You selected' + '** ' + name + '**')
            .setThumbnail(imgUrl) //agility img
            .addFields(
                { name: '**FROM LEVEL:**', value: '**' + args[1] + ' to ' + args[2] + '**', inline: true },
                
                { name: '**Total XP:**', value: '**' + num1 + '**', inline: true },
                { name: '\u200B', value: '\u200B' },    //Para formatação visual
                {name:  '**PRICE: **', value: '**' + precoTotal + '**', inline: true}
            )
            .setImage(imgUrl) //agility img
            .setTimestamp()   //Mostra o horario
            
                //Exemplo
                //if(res1!= null)
                //print name res1name valor res1;

                message.channel.send(allEmbed); 
    
    }


    switch(args[0]){
//---------------AGILITY----------------------------------------https://imgur.com/MpTitIu.png') //agility img .setColor('#0099ff')
        case 'agility':
            verif();
            let rateAgility = 14;
            let agilityColor = '#0099ff'
            let nameAgility = 'Agility';
            let imgUrlAgility ='https://imgur.com/MpTitIu.png';
            //res1=//valor da exp
            //res2name=null
            embedMaster(rateAgility, agilityColor,nameAgility,imgUrlAgility/*,res1,res2,res3,res1name,res2name,res3name*/);

            
            
            break;
//----------------ATTACK--------------------------------- ('https://imgur.com/cWQF4w4.png') //attack img      .setColor('#ff0000')
        case 'attack':
            verif();
            let rateAttack = 8;
            let attackColor = '#ff0000';
            let nameAttack = 'Agility';
            let imgUrlAttack ='https://imgur.com/cWQF4w4.png';
            embedMaster(rateAttack, attackColor,nameAttack,imgUrlAttack);
           
            break;
//----------------STRENGTH---------------------------------  ('https://imgur.com/vi8Ktcw.png') //strenght img  .setColor('#bf8040')
        case 'strength': 
        verif(); 
        let rateStrenght=8;
        let strenghtColor = '#bf8040';
        let nameStrenght = 'Strength';
        let imgUrlStrenght ='https://imgur.com/vi8Ktcw.png';
        embedMaster(rateStrenght, strenghtColor,nameStrenght,imgUrlStrenght);
        
        break;

//----------------DEFENCE---------------------------------   .setColor('#6600ff') .setThumbnail('https://imgur.com/wZthgY3.png') //defence img
        case 'defence':  
        verif();
        let rateDefence = 8;
        let defenceColor = '#6600ff';
        let nameDefence = 'Defence';
        let imgUrlDefence ='https://imgur.com/wZthgY3.png';
        embedMaster(rateDefence, defenceColor,nameDefence,imgUrlDefence);
        
        break;

//----------------CONSTRUCTION--------------------------------- .setColor('#993300')   ('https://imgur.com/H8VpD0O.png') //construc img
        case 'construction':
            verif();
            let rateConstruction = 40;
            let constructionColor = '#993300';
            let nameConstruction = 'Construction';
            let imgUrlConstruction ='https://imgur.com/H8VpD0O.png';
            embedMaster(rateConstruction, constructionColor,nameConstruction,imgUrlConstruction);
            
            break;            
//----------------COOKING---------------------------------  ('https://imgur.com/O1H1Z62.png') //cookin img  .setColor('#e68a00')
        case 'cooking':
            verif();
            let rateCooking = 20;
            let CookingColor = '#e68a00';
            let nameCooking = 'Cooking';
            let imgUrlCooking ='https://imgur.com/O1H1Z62.png';
            embedMaster(rateCooking, CookingColor,nameCooking,imgUrlCooking);

            break;    
//----------------CRAFTING---------------------------------   
        case 'crafting':
            verif();
            let rateCrafting = 30;
            let craftingColor ='#804d00';
            let nameCrafting = 'Crafting'
            let imgUrlCraft = 'https://imgur.com/nATDAz0.png'
            embedMaster(rateCrafting, craftingColor,nameCrafting,imgUrlCraft);
            break;
//----------------FARMING---------------------------------   daqui pra baixo n escolhi foto
        case 'farming':
            verif();
            let rateFarming = 60;
            let FarmingColor ='#4747d1';
            let nameFarming = 'Farming'
            let imgUrlFarming = 'https://imgur.com/p9ZUnyl.png'
            embedMaster(rateFarming, FarmingColor,nameFarming,imgUrlFarming);
            break;
        
//----------------FIREMAKING---------------------------------   
        case 'firemaking':
            verif();
            let rateFiremaking = 19;
            let FiremakingColor ='#e60000';
            let nameFiremaking = 'Firemaking'
            let imgUrlFiremaking = 'https://imgur.com/XviYwlu.png'
            embedMaster(rateFiremaking, FiremakingColor,nameFiremaking,imgUrlFiremaking);
            break;
//----------------FISHING---------------------------------   
        case 'fishing':
            verif();
            let rateFishing = 30;
            let FishingColor ='#a3a375';
            let nameFishing = 'Fishing'
            let imgUrlFishing = 'https://imgur.com/3tmoBQN.png'
            embedMaster(rateFishing, FishingColor,nameFishing,imgUrlFishing);
            break;
//----------------FLETCHING---------------------------------   
        case 'fletching':   
        verif();
        let rateFletching = 30;
        let FletchingColor ='#009900';
        let nameFletching = 'Fletching'
        let imgUrlFletching = 'https://imgur.com/kmsSrTt.png'
        embedMaster(rateFletching, FletchingColor,nameFletching,imgUrlFletching);
        break;  
 //----------------HERBLORE---------------------------------          
        case 'herblore':  
        verif();
        let rateHerblore = 30;
        let HerbloreColor ='#009900';
        let nameHerblore = 'Herblore'
        let imgUrlHerblore = 'https://imgur.com/WP8W3mS.png'
        embedMaster(rateHerblore, HerbloreColor,nameHerblore,imgUrlHerblore);
        break;
//----------------HUNTER---------------------------------   
        case 'hunter':  
        let rateHunter = 30;
        let HunterColor ='#663300';
        let nameHunter = 'Hunter'
        let imgUrlHunter = 'https://imgur.com/BNIFkif.png'
        embedMaster(rateHunter, HunterColor,nameHunter,imgUrlHunter);
        break;
//----------------MAGIC---------------------------------   
        case 'magic':  
        let rateMagic = 30;
        let MagicColor ='#0000ff';
        let nameMagic = 'Magic'
        let imgUrlMagic = 'https://imgur.com/uPe3ox9.png'
        embedMaster(rateMagic, MagicColor,nameMagic,imgUrlMagic);
        break;

//----------------MINING---------------------------------   
        case 'mining':  
        verif();
        let rateMining = 90;
        let MiningColor ='#3d3d5c';
        let nameMining = 'Mining'
        let imgUrlMining = 'https://imgur.com/KiF326R.png'     //1-90
        res1 = (verifyNumber(args[1]) * rateMining); //1-99 no res         72-99 - 40gp
        if(args[1] >=31 && args[1] <=72 && args[2] >=31 && args[2] <=72){   //se [1] e [2] estao no intervalo de 31 a 72
            res2 = (verifyNumber(args[2]) - verifyNumber(args[1])) * 75//31-72 ->75gp

        }else if(args[1]>=72 && args[1]<=99 && args[2]>=72 && args[2]<=99){
            res2 = (verifyNumber(args[2]) - verifyNumber(args[1])) * 40
        }else i{

        }
        embedMaster(rateMining, MiningColor,nameMining,imgUrlMining);
        break;
//----------------PRAYER---------------------------------   
        case 'prayer':  
        verif();
        let ratePrayer = 30;
        let PrayerColor ='#e6e6e6';
        let namePrayer = 'Prayer'
        let imgUrlPrayer = 'https://imgur.com/V8Rc5Nf.png'
        embedMaster(ratePrayer, PrayerColor,namePrayer,imgUrlPrayer);
        break;
//----------------RUNECRAFT---------------------------------   
        case 'runecraft':  
        verif();
        let rateRunecraft = 300;
        let RunecraftColor ='#ff3300';
        let nameRunecraft = 'Runecraft'
        let imgUrlRunecraft = 'https://imgur.com/LFAqcJ5.png'
        embedMaster(rateRunecraft, RunecraftColor,nameRunecraft,imgUrlRunecraft);
        break;
//----------------SMITHING---------------------------------   
        case 'smithing': 
        verif();
        let rateSmithing = 30;
        let SmithingColor ='#3d3d29';
        let nameSmithing = 'Smithing'
        let imgUrlSmithing = 'https://imgur.com/FQR3zUc.png'
        embedMaster(rateSmithing, SmithingColor,nameSmithing,imgUrlSmithing);
        break;
//----------------SLAYER---------------------------------           
        case 'slayer':  
        verif();
        let rateSlayer = 30;
        let SlayerColor ='#ffff66';
        let nameSlayer = 'Slayer'
        let imgUrlSlayer = 'https://imgur.com/rD0KOGP.png'
        embedMaster(rateSlayer, SlayerColor,nameSlayer,imgUrlSlayer);
        break;
//----------------WOODCUTTING---------------------------------   
        case 'woodcutting':  
        verif();
        let rateWoodcutting = 30;
        let WoodcuttingColor ='#00b300';
        let nameWoodcutting = 'Woodcutting'
        let imgUrlWoodcutting = 'https://imgur.com/QbsqZTj.png'
        embedMaster(rateWoodcutting, WoodcuttingColor,nameWoodcutting,imgUrlWoodcutting);
        break;
//---------------THIEVING--------------------------------

        case 'thieving':
            verif();
            let rateThieving = 30;
            let ThievingColor ='#000000';
            let nameThieving = 'Thieving'
            let imgUrlThieving = 'https://imgur.com/RuhCkHo.png'
            embedMaster(rateThieving, ThievingColor,nameThieving,imgUrlThieving);
            break;       

    }

//FUNÇOES 
//ENDALL
    function endAll(){
        const WrongEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Skill xp calculator')
        .setURL('https://discord.gg/fHnArq')
        .setAuthor('Alibabas server', 'https://imgur.com/UI3djmH.png', 'https://discord.gg/fHnArq')
        .setDescription('**INVALID ARGUMENTS - RECHECK.**')
        .setImage('https://media.giphy.com/media/10tIjpzIu8fe0/giphy.gif')
        .setTimestamp();
        message.channel.send(WrongEmbed); 
        return;
    }
//Verificaçao dos args
function verif(){
    var vetAux = [0,0,0,0,0];
    vetAux = args[1];
    if(vetAux[1]==='-') {   //1-77 ou 1-77
        args[1]=vetAux.substring(0,1);
        args[2]=vetAux.substring(2,vetAux.length);
    }
    else if(vetAux[2]==='-'){
        args[1]=vetAux.substring(0,2);
        args[2]=vetAux.substring(3,vetAux.length);
    }
    
    if(args[1] > 99 || args[2] > 99 || (args[2] - args[1]) <=0 ){ 
            endAll();
    }
}

})


//Funçoes
//VerifyNumeber
function verifyNumber(number) {
    //Ideias, usar Hashmap; Ou mesmo busca binaria;
    var vetor = [ 0,83,174,276,388,512,650,801,969,1154,1358,1584,1833,2107,2411,2746,3115,3523,3973,4470,
        5018,5624,6291,7028,7842,8740,9730,10824,12031,13363,14833,16456,18247,20224,22406,
        24815,27473,30408,33648,37224,41171,45529,50339,55649,61512,67983,75127,83014,91721,
        101333,111945,123660,136594,150872,166636,184040,203254,224466,247886,273742,302288,333804,
        368599,407015,449428,496254,547953,605032,668051,737627,814445,899257,992895,1096278,1210421,
        1336443,1475581,1629200,1798808,1986068,2192818,2421087,2673114,2951373,3258594,3597792,
        3972294,4385776,4842295,5346332,5902831,6517253,7195629,7944614,8771558,9684577,10692629,	
        11805606,13034431];
    for(i=0;i<=vetor.length;i++){
        if(i === number)
        {
            number= vetor[i];
           return number; 
        }  
  }
}

//TransformNumber
function transformNumber(numero){
if((numero/1000000)<1){

    numero =(numero/1000).toFixed(2) + ' K';
    return numero;
}
else{
    numero = (numero/1000000).toFixed(2) + ' M';
    return numero;
}

}

bot.login(token);