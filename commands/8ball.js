const {MessageEmbed} = require("discord.js");
const Discord = require("discord.js");
module.exports = {
    name: "8ball",
    cooldown: 1,
    aliases: ["8yn"],

    async execute(message, args, client) {
        message.delete()
        const reponsseyn = [
            "Oui",
            "Non",
            "Peut-être",
            "Probablement pas",
            "C'est oui a 100%",
            "Je ne sais pas",
            "Repose moi la question plus tard",
            "Jamais de la vie",
            "Je ne suis pas sur de ça...",
        ]
        let random = reponsseyn[Math.floor(Math.random() * reponsseyn.length)]

        let arg = message.content.split(" ").slice(1);
        let contenu = arg.join(" ");

        var nomessage = new MessageEmbed()
            .setTitle("Une erreur est survenue !")
            .setDescription("Veuillez préciser la question a posé à PowerUwaa !")
            .setColor("RED")

        if (!args[0]) return message.channel.send(nomessage)

        var reponsse = new MessageEmbed()
            .setTitle(`:question: Question \n ${contenu} \n\n:8ball: 8ball \n ${random}`)
            .setFooter(`Question de : ${message.author.username}`)
        message.channel.send(reponsse)
    }
}

