const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous ne pouvez pas utiliser cette commande. Vous allez donc avoir un warn <@&646791183552741376>");
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Vous avez oublié la mention du joueur que vous voulez warn");
    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send("Vous n'avez pas mis de raison au warn");
    if (user.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous ne pouvez pas warn cette personne");

    user.send("Vous avez été warn pour la raison suivante : " + reason);
    const warnChannel = bot.channels.cache.get("647779890342526976");
    warnChannel.send("<@" + user.id + "> a été warn par <@" + message.author.id + "> pour la raison suivante : " + reason);
    
}

module.exports.help = {
    name: "warn"
}