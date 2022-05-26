const Discord = require('discord.js')
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "metamorph",
    cooldown: 20,
    aliases: ["meta"],

    async execute(message, args, client) {
        var replys = [
            "En Chein ! :dog:",
            "En Chat ! :cat:",
            "En Poulet ! :chicken:",
            "En Vache ! :cow:",
            "En Lapin ! :rabbit:",
            "En Cochon ! :pig:",
            "En Licorne ! :unicorn:",
            "En Poisson ! :fish:",
            "En Araignée ! :spider:",
            "En Tortue ! :turtle:",
            "En Escargot ! :snail:",
            "En Eléphant ! :elephant:",
            "En Cerf ! :deer:",
            "En Crocodile ! :crocodile:",
            "En Dindon ! :turkey:",
            "En Gorille ! :gorilla:",
        ];

        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        let target = message.mentions.users.first() || message.author;
        let embed = new MessageEmbed()
            .setTitle("Métamorphe")
            .setColor("#F7BA2A")
            .addField("Le membre", `${target}`)
            .addField("A été métamorphosé...", reponse)
            .setFooter(`Demandé par ${message.author.username}`)
            .setTimestamp()
        message.channel.send({embed: embed});


    }
}