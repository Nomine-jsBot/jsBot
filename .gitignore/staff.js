const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Tu peux pas ultiliser c'te commande. Mais fait attention, tu peux te prendre un warn si t'essayes d'autres commandes :eyes:");
    } else {
        let FondaId = "646790886499549184";
        let Fonda = message.guild.roles.cache.get(FondaId).members;
        message.channel.send(`Nombre de <@&561526503947632660> : ${Fonda.size}`);

        let AdminId = "646790886499549184";
        let Admin = message.guild.roles.cache.get(AdminId).members;
        message.channel.send(`Nombre de <@&565221482800742410> : ${Admin.size}`);

        let GerantModoId = "646790886499549184";
        let GerantModo = message.guild.roles.cache.get(GerantModoId).members;
        message.channel.send(`Nombre de <@&647831187712114708> : ${GerantModo.size}`);

        let ModoChatId = "646791183552741376";
        let ModoChat = message.guild.roles.cache.get(ModoChatId).members;
        message.channel.send(`Nombre de <@&646791183552741376> : ${ModoChat.size}`);

        let ModoVocId = "646790886499549184";
        let ModoVoc = message.guild.roles.cache.get(ModoVocId).members;
        message.channel.send(`Nombre de <@&646790886499549184> : ${ModoVoc.size}`);

        let GerantBotId = "646790886499549184";
        let GerantBot = message.guild.roles.cache.get(GerantBotId).members;
        message.channel.send(`Nombre de <@&647831378112675850> : ${GerantBot.size}`);
    }
}

module.exports.help = {
    name: "staff"
}