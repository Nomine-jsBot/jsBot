const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require('ytdl-core');

const bot = new Discord.Client();
const prefix = "!";

bot.login(process.env.TOKEN);

bot.commands = new Discord.Collection();
 
fs.readdir("./commands/", (error, files) =>{
    if(error) console.log(error);
 
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if(jsFiles.length <= 0){
        console.log("Aucun fichier de commande !")
        return;
    }
    jsFiles.forEach((f,i) =>{
        var fileGet = require("./commands/" + f);
        console.log("Fichier de commande " + f + " récupéré avec succès !")
        bot.commands.set(fileGet.help.name, fileGet)
    });
});
 
bot.on("ready", async () =>{
    console.log(" ")
    console.log("Connecté en tant que : " + bot.user.tag)
});
 
bot.on("message", message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
 
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var args = messageArray.slice(1)
    var commands = bot.commands.get(command.slice(prefix.length))
    if(commands) commands.run(bot, message, args);
});


// Commande !ping :

bot.on('message', message => {
    if (message.content === prefix + "ping") { 
        message.reply("Pong !");
        message.channel.send("En fait si t'as pas compris la blague, j'vais te l'expliquer. En gros, comme t'as dit ping, j'ai dit pong pour faire référence au sport... Le ping-pong.");
        setTimeout(function(){ message.channel.send("Ok je sors..."); }, 6000)
    }
})


// Commande !help-modo :

bot.on('message', message => {
    if (message.content === prefix + "help-modo") { 
        message.channel.send("Hé les <@&646791183552741376>, y'a " + message.author.id + " qui a besoin de vous alors faites votre travail :rage:");
    }
})
