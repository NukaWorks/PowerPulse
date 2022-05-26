const {MessageEmbed} = require("discord.js");
const Discord = require("discord.js");
module.exports = {
    name: "say",
    cooldown: 50,
    aliases: ["parler"],

    async execute(message, args, client) {

        let nocmd = new MessageEmbed()
            .setTitle("Commande incorect !")
            .setDescription("Vous devez rentrer un message pour utiliser la commande `say`.")

        const saywhat = args.join(" ")
        if (saywhat < 1) return message.channel.send(nocmd)
        var invite = new MessageEmbed()
            .setTitle(`__***Un message est apparus !***__`)
            .setDescription(saywhat)
            .setFooter(`Message de : ${message.author.username}`)
            .setColor("RANDOM")
        message.channel.send(invite)
    }
}