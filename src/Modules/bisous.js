const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "kiss",
    cooldown: 5,
    aliases: ["bisous"],

    async execute(message, args, client) {
        const kissgif = [
            "https://i.ibb.co/Xs1N2Dn/gif1.gif",
            "https://media1.tenor.com/images/be98a62a0af4f4f7f669a139f1de659c/tenor.gif",
            "https://img.wattpad.com/d7d83c280bd7c916eb6c21d7080070f8c9ad69ad/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4e713877326e43757943626c35773d3d2d3834393530333035372e313566633539353933326264353834623738323239393635353933322e676966",
            "https://data.photofunky.net/output/image/f/2/4/0/f240a4/photofunky.gif",
            "https://i.pinimg.com/originals/f9/92/7e/f9927ed8608483763ae13357190ce16f.gif",
            "https://data.whicdn.com/images/122233359/original.gif",
            "https://thumbs.gfycat.com/ColorlessFriendlyFattaileddunnart-small.gif",
            "https://64.media.tumblr.com/234d9060c013e4d190fbfc4c8534de16/tumblr_mwsgvroPjo1t1jlezo1_500.gif",
            "https://thumbs.gfycat.com/AntiqueFaroffHookersealion-size_restricted.gif",
            "https://i.pinimg.com/originals/01/e1/e5/01e1e54827ebfc9aee52957fe4e7d240.gif",
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
                .setDescription(`${member}! Vous recevez un bisou de ${message.author.username} ❤ !`)
                .setColor("#34363C")
                .setImage(random)
            message.channel.send(kiss_embed)
        }
    }
}