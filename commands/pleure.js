const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "pleure",
    cooldown: 5,
    aliases: ["cry"],

    async execute(message, args, client) {
        const crygif = [
            "https://i.giphy.com/media/3o6wrvdHFbwBrUFenu/200.gif",
            "https://media.tenor.com/images/ae6e65af8053f325f0edde99376c58d8/tenor.gif",
            "https://thumbs.gfycat.com/DevotedDazzlingBarnowl-small.gif",
            "https://64.media.tumblr.com/37c0928c9e3f1f16c6f910cc3c04247e/tumblr_nabqw145or1slmtxco1_500.gif",
            "https://muumuse.com/wp-content/uploads/2018/09/britney-cry.gif",
            "https://thumbs.gfycat.com/GiganticFilthyDouglasfirbarkbeetle-size_restricted.gif",
            "https://confessionsofawallflower23.files.wordpress.com/2011/07/hermione-g-crying-gif-harry-potter.gif?w=640",
            "http://cdn.lowgif.com/full/055ef26a4588a313-anime-cry-gifs-on-giphy.gif",
        ]
        let random = crygif[Math.floor(Math.random() * crygif.length)]

        const member = message.mentions.members.first();
        if (!member) {
            var error_mentions = new MessageEmbed()
                .setTitle("Une erreur est survenue !")
                .setDescription("Merci de mentionner un utilisateur pour effectuer cette action.")
                .setColor("#F53436")
            message.channel.send(error_mentions)
        } else {
            var kiss_embed = new MessageEmbed()
                .setDescription(`${message.author.username} pleure à cause de ${member} 😭 !`)
                .setColor("#34363C")
                .setImage(random)
            message.channel.send(kiss_embed)
        }
    }
}