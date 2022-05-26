const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "radio",
    cooldown: 10,
    aliases: ["rds"],

    async execute(message, args, client) {

        const nameuser = message.author.tag


        let radioembed = new MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`${nameuser}`)
            .setDescription("__**📻   Liste des radios disponibles !**__ \n \n `NeedFM France` \n -needfm \n `Funradio France` \n -funradio \n `NRJ France` \n -nrj \n `FranceBleu France` \n -francebleu \n `OneFM Switzerland` \n -onefm \n")
        message.channel.send(radioembed)


    }
}

