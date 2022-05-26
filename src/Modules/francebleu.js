const Discord = require("discord.js");
const {MessageEmbed} = require('discord.js')
//const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
module.exports = {
    name: "francebleu",
    cooldown: 10,
    aliases: ["fbradio"],

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
                        .setTitle("FranceBleu France")
                        .setDescription("**Connexion effectuée avec succès !**")
                        .setColor('GREEN')
                        .setURL("https://www.francebleu.fr/")
                        .setThumbnail("https://dbs.radioline.fr/pictures/radio_798ed8c101dacd20b14d7e5e339295ac/logo200.jpg?size=600")
                        .setTimestamp()
                    connection.play(`http://icecast.radiofrance.fr/fb1071-midfi.mp3`);
                    message.channel.send(embed);
                })

        }
    }
}