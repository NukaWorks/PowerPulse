const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "help",
    cooldown: 10,
    aliases: ["aide"],

    async execute(message, args, client) {
        let embedhelp = new MessageEmbed()

            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL({size: 512, dynamic: true}))
            .setDescription(`**♟️ - Commandes utiles :** **-helputil** ** \n \n 😎 - Commandes fun :** **-helpfun** \n \n **🎵 - Commandes musicale :** **-helpsong** \n\n **🛡️ - Commandes de modération : ** **-helpmod**`)


        message.channel.send(embedhelp)


    }
}