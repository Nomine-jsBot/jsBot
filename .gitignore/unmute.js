const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous ne pouvez pas utiliser cette commande. Vous allez donc avoir un warn <@&646791183552741376>");
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Vous avez oublié la mention du joueur que vous voulez mute");
    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send("Vous n'avez pas mis de raison au mute");
    if (user.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous ne pouvez pas mute cette personne");

    user.send("Vous avez été unmute pour la raison suivante : " + reason);
    const muteChannel = bot.channels.cache.get("708976309732245514");
    muteChannel.send("<@" + user.id + "> a été unmute par <@" + message.author.id + "> pour la raison suivante : " + reason);
    let role = message.guild.roles.cache.find(role => role.name === "Muted");
    user.roles.remove(role.id);
    
}

module.exports.help = {
    name: "unmute"
}