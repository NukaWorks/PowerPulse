const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");
const {get} = require("snekfetch");
module.exports = {
    name: "nasa",
    cooldown: 10,
    aliases: ["nasa"],

    async execute(message, args, client) {
        const {body} = await get("https://api.nasa.gov/planetary/apod?api_key=WHsJtJDvvS8GOaYdXMhKVkqN9Tr1xPkFLGnF4uo5")
        let embed = new MessageEmbed()
            .setTitle("NASA")
            .setColor("#F7BA2A")
            .setDescription("Voici la photo du jour du site de la NASA")
            .setImage(body.hdurl)
            .setFooter(`Demandé par ${message.author.username}`)
            .setTimestamp();
        message.channel.send({embed: embed});

    }
}
