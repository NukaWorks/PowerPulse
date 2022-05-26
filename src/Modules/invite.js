const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "invite",
    cooldown: 20,
    aliases: ["PowerUwaa"],

    async execute(message, args, client) {
        var invite = new MessageEmbed()
            .setTitle(`:bell: __PowerUwaa__ \n Laisse-moi faire partie de ton quotidien !`)
            .addField("__**Lien d'invitation avec les permissions d'administrateurs :**__", "https://invite.PowerUwaa.fr ou https://invite.PowerUwaa.eu")
            .addField("__**Vous pouvez aussi rejoindre PowerUwaa sur son site internet :**__", "https://PowerUwaa.fr")
            .addField("__**Discord du support de PowerUwaa :**__", "https://support.PowerUwaa.fr")
            .setThumbnail('https://i.ibb.co/fMXfgD3/shiropng.png')
            .setFooter("PowerUwaa - Laisse-moi faire partie de ton quotidien !")
            .setColor("#8697CB")
        message.channel.send(invite)
    }
}