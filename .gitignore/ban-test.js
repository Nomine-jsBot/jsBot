const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne pouvez pas utiliser cette commande. Vous allez donc avoir un warn <@&646791183552741376>");
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Vous avez oublié la mention du joueur que vous voulez ban");
    let reason = args.slice(1).join(" ");
    if (!reason) return message.channel.send("Vous n'avez pas mis de raison au ban");
    if (user.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous ne pouvez pas ban cette personne");

}

module.exports.help = {
    name: "ban-test"
}