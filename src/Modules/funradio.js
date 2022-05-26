const Discord = require("discord.js");
const {MessageEmbed} = require('discord.js')
//const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
module.exports = {
    name: "funradio",
    cooldown: 10,
    aliases: ["fnradio"],

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
                        .setTitle("FunRadio France")
                        .setDescription("**Connexion effectuée avec succès !**")
                        .setColor('GREEN')
                        .setURL("https://www.funradio.fr/")
                        .setThumbnail("https://i.imgur.com/w9ACgMv.png")
                        .setTimestamp()
                    connection.play(`http://icecast.funradio.fr/fun-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg`);
                    message.channel.send(embed);
                })

        }
    }
}
