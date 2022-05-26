const Discord = require("discord.js");
const {MessageEmbed} = require('discord.js')
//const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
module.exports = {
    name: "nrj",
    cooldown: 10,
    aliases: ["nj"],

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
                        .setTitle("NRJ France")
                        .setDescription("**Connexion effectuée avec succès !**")
                        .setColor('GREEN')
                        .setURL("http://www.nrj.fr/")
                        .setThumbnail("https://i.imgur.com/fhcaHew.png")
                        .setTimestamp()
                    connection.play(`http://cdn.nrjaudio.fm/audio1/fr/40094/aac_64.mp3`);
                    message.channel.send(embed);
                })

        }
    }
}   
