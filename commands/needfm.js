const Discord = require("discord.js");
const {MessageEmbed} = require('discord.js')
//const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
module.exports = {
    name: "needfm",
    cooldown: 10,
    aliases: ["need"],

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
                        .setTitle("NeedFM France")
                        .setDescription("**Connexion effectuée avec succès !**")
                        .setColor('GREEN')
                        .setURL("https://www.needfm.fr/")
                        .setThumbnail("https://i.imgur.com/H6w4BLM.png")
                        .setTimestamp()
                    connection.play(`http://stream.zeno.fm/sfv9qrs2ss8uv`);
                    message.channel.send(embed);
                })

        }
    }
}