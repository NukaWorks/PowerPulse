const Discord = require("discord.js");
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "pat",
    cooldown: 1,
    aliases: ["pt"],

    async execute(message, args, client) {
        const member = message.mentions.members.first();
        const patgif = [
            "https://media.tenor.com/images/dfe3267cca9596be840fbf9d5e86b747/tenor.gif",
            "https://media.tenor.com/images/cb1405fdc978948f75ba4ff43c4ad8b0/tenor.gif",
            "https://media.tenor.com/images/86fee4add43f1910ee89a7f1c75e5679/tenor.gif",
            "https://media.tenor.com/images/c89ad4fe61f9a95fc85a13b27c75c5b6/tenor.gif",
            "https://media.tenor.com/images/ad49d617264a7c2157ce08dc548e52a5/tenor.gif",
            "https://media.tenor.com/images/e7c613b4f1336f27cc19502328dd9600/tenor.gif",
            "https://media.tenor.com/images/06b817ba8769f41ab9566cc4747dea3e/tenor.gif",
        ]
        let random = patgif[Math.floor(Math.random() * patgif.length)]

        if (!member) {
            var error_mentions = new MessageEmbed()
                .setTitle("Une erreur est survenue !")
                .setDescription("Merci de mentionner un utilisateur pour effectuer cette action.")
                .setColor("#F53436")
            message.channel.send(error_mentions)
        } else {
            var hitembed = new MessageEmbed()
                .setDescription(`${member} se fait caresser la tête par ${message.author.username} !`)
                .setColor("#9c0000")
                .setImage(random)
            message.channel.send(hitembed)


        }
    }
}