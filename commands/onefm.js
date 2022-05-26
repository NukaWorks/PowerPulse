const Discord = require("discord.js");
const {MessageEmbed} = require('discord.js')
//const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
module.exports = {
    name: "onefm",
    cooldown: 10,
    aliases: ["ofm"],

    async execute(message, args, client) {

        let errorvoc = new MessageEmbed()
            .setTitle("Une erreur est survenue !")
            .setDescription("Vous devez être connecté à un salon vocal pour effectuer cette commande !")
            .setColor("RED")
            .setTimestamp()

        if (!message.member.voice.channel) return message.channel.send(errorvoc);

        if (message.member.voice.channel) {
            message.member.voice.channel.join()
                .then(connection => {
                    let embed = new MessageEmbed()
                        .setTitle("OneFM Switzerland")
                        .setDescription("**Connexion effectuée avec succès !**")
                        .setColor('GREEN')
                        .setURL("https://www.onefm.ch/")
                        .setThumbnail("https://dbs.radioline.fr/pictures/radio_2e1f6a2738d2ac66af076aff94f2b589/logo200.jpg?size=200")
                        .setTimestamp()
                    connection.play(`http://onefm.ice.infomaniak.ch/onefm-high.mp3`);
                    message.channel.send(embed);
                })

        }
    }
}