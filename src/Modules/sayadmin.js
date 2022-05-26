const {MessageEmbed} = require("discord.js");
const Discord = require("discord.js");
module.exports = {
    name: "sayadmin",
    cooldown: 1,
    aliases: ["saya"],

    async execute(message, args, client) {
        message.delete()
        if (message.author.id == "323093301039202314") {
            var sayadmin = args.join(' ');
            message.channel.send(sayadmin)
        } else {
            message.channel.send("⚠️ **Cette commande est réservée à la créatrice de PowerUwaa !**")
        }
    }
}
