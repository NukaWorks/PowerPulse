const Discord = require(`discord.js`);
const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "punch",
    cooldown: 5,
    aliases: ["cdp"],

    async execute(message, args, client) {
        const member = message.mentions.members.first();

        const cdpgif = [
            "https://i.pinimg.com/originals/3e/fc/dc/3efcdca4fe7e8482fb7fa909452dad2a.gif",
            "https://i.pinimg.com/originals/39/d4/38/39d4386b52938d66c7afd1f3cb1a351a.gif",
            "https://media.giphy.com/media/GrrKksmY6qkWk/giphy.gif",
            "https://media1.tenor.com/images/306f06d4b8dd14be8af12f858ce878ec/tenor.gif",
            "https://thumbs.gfycat.com/NiftyUnrealisticDrever-small.gif",
            "https://64.media.tumblr.com/9381a8ed59622fff02f0b75d11d30f33/tumblr_n7gsehiP6B1ta4apro1_500.gif",
            "https://media.tenor.com/images/70974cfd497e1c48f6775b9a44a26c4d/tenor.gif",
            "https://media1.tenor.com/images/4fc5e621248d3d93ab106a2c7e7e0723/tenor.gif",
        ]
        let random = cdpgif[Math.floor(Math.random() * cdpgif.length)]

        if (!member) {
            var error_mentions = new MessageEmbed()
                .setTitle("Une erreur est survenue !")
                .setDescription("Merci de mentionner un utilisateur pour effectuer cette action.")
                .setColor("#F53436")
            message.channel.send(error_mentions)
        } else {
            var hitembed = new MessageEmbed()
                .setDescription(`${member} ! Vous recevez un coup de poing de ${message.author.username} 👊`)
                .setColor("#9c0000")
                .setImage(random)
            message.channel.send(hitembed)

        }
    }
}
