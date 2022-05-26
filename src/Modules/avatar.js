const {MessageEmbed} = require('discord.js')


module.exports = {
    name: "avatar",
    cooldown: 20,
    aliases: ["avs"],

    async execute(message, args, client) {
        let user = message.mentions.users.first() || message.author
        let embedavatar = new MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`Clique ici pour ouvrir l'avatar dans ton navigateur !`)
            .setAuthor(`Avatar de ${user.tag}`, user.displayAvatarURL({size: 512, dynamic: true}))
            .setFooter(`Avatar de ${user.tag}`)
            .setURL(user.displayAvatarURL({size: 512, dynamic: true}))
            .setImage(user.displayAvatarURL({size: 512, dynamic: true}))
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL({size: 512, dynamic: true}))

        message.channel.send(embedavatar)
    }

}
