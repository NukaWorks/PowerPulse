const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "helpsong",
    cooldown: 10,
    aliases: ["help3"],

    async execute(message, args, client) {
        let embedhelp = new MessageEmbed()

            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`${message.author.username}`)
            .setDescription("__**🎵 Commandes musicale :**__ \n\n `-radio` \n Voir toutes les radios disponibles.\n `-play` \n Lancer des musiques dans un salon vocal à partir de YouTube Ou Soundcloud.\n `-skip` \n Permet de sauter une musique dans liste de lecture. \n `-pause` \n Permet de mètre en pause la musique en cours de lecture. \n `-resume` \n Permet de continuer la lecture de la musique. \n `-loop` \n Permet de lire en boucle la musique en cours de lecture. \n `-np` \n Permet de voir la musique en cours de lecture. \n `-search` \n Permet de chercher une musique avec son nom pour la jouer ( avec propositions ). \n `-shuffle` \n Permet de mélanger la liste de lecture. \n `-stop` \n Permet de stopper et d'effacer la liste de lecture. \n `-lyrics` \n Permet d'avoir les paroles de la musique en cours. \n `-volume` \n Permet de regler le volume du bot ( entre 0 et 100 ). \n `-skipto` \n Permet de passer les musiques jusqu'à la musique souhaitée. \n `-ls` \n Permet de voir les musiques dans la liste de lecture. \n")


        message.channel.send(embedhelp)


    }
}