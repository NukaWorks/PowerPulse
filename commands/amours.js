const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "amours",
    cooldown: 0,
    aliases: ["love"],

    async execute(message, args, client) {

        let twomentions = new MessageEmbed()
            .setTitle("Une erreur est survenue !")
            .setDescription("Vous devez mentionner deux utilisateurs !")
            .setColor("RED")

        if (!message.mentions.users.size === 0) return message.channel.send(twomentions)

        let user1 = args[0];
        let user2 = args[1];

        if (!args[0] || args[0 == "null"]) return message.channel.send(twomentions);

        if (!args[1] || args[1 == "null"]) return message.channel.send(twomentions);

        let number = Math.floor(Math.random() * 99) + 1;

        let loveplusembed = new MessageEmbed()
            .setDescription(`**Amour entre ${user1} et ${user2}**`)
            .addField("Resultat", `${number}% :two_hearts:`)
            .setColor("GREEN")
            .setThumbnail("https://media.giphy.com/media/4N1wOi78ZGzSB6H7vK/giphy.gif")
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL({size: 512, dynamic: true}))
        if (number > 70) return message.channel.send(loveplusembed)

        let loveembed = new MessageEmbed()
            .setDescription(`**Amour entre ${user1} et ${user2}**`)
            .addField("Resultat", `${number}% :heart:`)
            .setColor("GREEN")
            .setThumbnail("https://media1.tenor.com/images/a93bc49795642f4e88b8bc512d3204b0/tenor.gif")
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL({size: 512, dynamic: true}))
        if (number < 70) return message.channel.send(loveembed)

    }
}