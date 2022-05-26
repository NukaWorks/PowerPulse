const fetch = require("node-fetch");
const {MessageEmbed, Message} = require("discord.js");
module.exports = {
    name: "cat",
    cooldown: 15,
    aliases: ["chat"],

    async execute(message, args, client) {
        const cat = await fetch("http://aws.random.cat/meow")
            .then(res => res.json())
            .then(json => json.file);

        const embed = new MessageEmbed()
            .setTitle(`__Photo de chats !__`)
            .setURL(cat)
            .setImage(cat)
            .setFooter(`Commande executez par ${message.author.tag}`);

        message.channel.send(embed);
    }
}
