const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous ne pouvez pas utiliser cette commande. Vous allez donc avoir un warn <@&646791183552741376>");
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Vous avez oublié la mention du joueur que vous voulez kick");
    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send("Vous n'avez pas mis de raison au kick");
    if (user.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous ne pouvez pas kick cette personne");
    
    user.send("Vous avez été kick du serveur pour la raison suivante : " + reason);
    function kickUser() {
        const kickChannel = bot.channels.cache.get("708976463214411796");
        kickChannel.send("<@" + user.id + "> a été kick du serveur par <@" + message.author.id + "> pour la raison suivante : " + reason);
        user.kick(reason);
    }
    setTimeout(kickUser, 1000)
}

module.exports.help = {
    name: "kick"
}