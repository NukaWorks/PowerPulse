const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "hug",
    cooldown: 5,
    aliases: ["calin"],

    async execute(message, args, client) {
        const kissgif = [
            "https://i.giphy.com/media/9A3tqWEodoYQyK4YF1/giphy.webp",
            "https://www.elle.be/fr/wp-content/uploads/2016/01/10.gif",
            "https://64.media.tumblr.com/1be8282bb5f76d9790917f786203b380/tumblr_n3056wdy9V1t4ps23o1_500.gif",
            "https://www.elle.be/fr/wp-content/uploads/2016/01/9.gif",
            "https://media3.giphy.com/media/XAnTeL5MHLNpS/source.gif",
            "https://1.bp.blogspot.com/-8yQfGUDQgz4/XplPCLKwc1I/AAAAAAAASPk/Em6kLx1lMQMZ65x0dZH9vO0JSkjiLrZvACLcBGAsYHQ/s1600/Hug-GIF-Images%2B%252825%2529.gif",
        ]
        let random = kissgif[Math.floor(Math.random() * kissgif.length)]

        const member = message.mentions.members.first();
        if (!member) {
            var error_mentions = new MessageEmbed()
                .setTitle("Une erreur est survenue !")
                .setDescription("Merci de mentionner un utilisateur pour effectuer cette action.")
                .setColor("#F53436")
            message.channel.send(error_mentions)
        } else {
            var kiss_embed = new MessageEmbed()
                .setDescription(`${member}! Vous recevez un calin de ${message.author.username} ❤ !`)
                .setColor("#34363C")
                .setImage(random)
            message.channel.send(kiss_embed)
        }
    }
}