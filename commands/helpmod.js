const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "helpmod",
    cooldown: 10,
    aliases: ["help4"],

    async execute(message, args, client) {
        let embedhelp = new MessageEmbed()

            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`${message.author.username}`)
            .setDescription("__**🛡️ Commandes de modération :**__ \n \n `-ban` \n Permet de banir un utilisateur. \n `-kick` \n Permet d'expulsez un utilisateur. \n  `-clear` \n permet d'effacez des message (max 100)  \n `-annonce` \n Permet de faire une annonce sur le serveur.")


        message.channel.send(embedhelp)


    }
}