const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "helpfun",
    cooldown: 10,
    aliases: ["help2"],

    async execute(message, args, client) {

        let embedhelp = new MessageEmbed()

            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`${message.author.username}`)
            .setDescription("__**😎 Commandes fun :**__ \n \n `-calin ou -hug` \n Effectuer un câlin virtuel à un utilisateur. \n `-weather ou -meteo` \n Afficher la météo d'une ville.\n `-say ou -parler` \n Faire parler le bot avec le message de votre choix.\n  `-punch ou -cdp` \n Donner un coup de poing virtuel à un utilisateur.\n `-cat ou -chat` \n Afficher une photo de chat aléatoire.\n `-kiss ou -bisous` \n Effectuer un bisous virtuel à un utilisateur.\n `-love ou -amours` \n Vous donne le pourcentage de chance d'amours entre deux personnes. \n `-cry ou -pleure` \n Accuse un utilisateur de vous faire pleurer ! \n `-nasa` \n Afficher la photo du jour de la NASA (National Aeronautics and Space Administration) \n `-8ball` \nPermet de poser une questions a PowerUwaa.\n `-pat ou -caresse` \n Permets de caresser un utilisateur sur la tête.\n `-metamorph ou -meta`\n Permet de méthamorphosé un utilisateur.")


        message.channel.send(embedhelp)


    }
}