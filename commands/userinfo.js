const Discord = require("discord.js");
const moment = require("moment");
module.exports = {
    name: "userinfo",
    cooldown: 2,
    aliases: ["usinfo"],

    async execute(message, args, client) {

        let inline = true
        let resence = true
        const status = {
            online: "En ligne",
            idle: "Inactif",
            dnd: "Ne pas déranger",
            streaming: "Stream en cours",
            offline: "Hors-Ligne/Invisble"
        }
        let mentionedUser = message.mentions.users.first() || message.author
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let target = message.mentions.users.first() || message.author

        if (member.user.bot === true) {
            bot = "Oui";
        } else {
            bot = "Non";
        }


        let embed = new Discord.MessageEmbed()
            .setAuthor(member.user.username)
            .setColor("#00ff00")
            .addField("Pseudo :two_women_holding_hands:", `${member.user.tag}`, inline)
            .addField("ID :id:", member.user.id, inline)
            .addField("Bot? ", `${bot}`, inline, true)
            .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "N'a pas de roles !"}`, true)
            .addField("A rejoint Discord le :", moment(member.user.createdAt).format('DD/MM/YYYY hh:mm:ss'), true)
            .setFooter(`Information a propos de ${member.user.username}`)
            .addField('📅 Arriver sur le serveur', moment(message.guild.members.cache.get(member.id).joinedAt).format("DD/MM/YYYY"), true)
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()

        message.channel.send(embed);

    }
}