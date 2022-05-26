const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "helputil",
    cooldown: 10,
    aliases: ["help1"],

    async execute(message, args, client) {
        let embedhelp = new MessageEmbed()

            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`${message.author.username}`)
            .setDescription("__**♟️ Commandes utiles :**__ \n \n `-avatar ou -avs` \n Afficher l'avatar d'un membre. \n  `-invite ou -PowerUwaa` \n Fournir un lien d'invitation pour accueillir le bot. \n `-userinfo ou -usinfo` \n Afficher les informations d'un membre. \n `-password ou -mdp` \n Génerez un mot de passe aléatoire.")


        message.channel.send(embedhelp)


    }
}