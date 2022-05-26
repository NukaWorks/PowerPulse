const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "ban",
    cooldown: 0,
    aliases: ["ban"],

    async execute(message, args, client) {

        let errorvoc = new MessageEmbed()
            .setDescription(`Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.`)
            .setFooter(`Pour utilisée cette commande vous devez disposez de la permissions BAN_MEMBERS.`, message.author.displayAvatarURL({
                size: 512,
                dynamic: true
            }))
            .setColor("RED")
            .setTitle(`Accès à la commande refusée.`)

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(errorvoc)

        let userno = new MessageEmbed()
            .setTitle("Une erreur est survenue !")
            .setDescription("L'utilsateur est introuvable !")
            .setColor("RED")

        let nobanis = new MessageEmbed()
            .setTitle("Une erreur est survenue !")
            .setDescription("Je ne peux pas bannir cet utilisateur !")
            .setColor("RED")

        let banUser = message.mentions.users.first()

        if (!banUser) return message.channel.send(userno);

        let banRaison = args.join(" ").slice(22);

        let noraison = new MessageEmbed()
            .setTitle("Une erreur est survenue !")
            .setDescription("Veuillez fournir une raison pour bannir cette utilisateur !")
            .setColor("RED")

        if (!banRaison) return message.channel.send(noraison)

        if (banUser.id === message.guild.ownerID) return message.channel.send(nobanis)

        let banEmbed = new MessageEmbed()
            .setAuthor('Sanction', `${message.author.displayAvatarURL({size: 512, dynamic: true})}`)
            .setColor("RED")
            .setDescription(`Le membre ${banUser} a été **banni**.\n Raison: ${banRaison}`)

        let banmsg = new MessageEmbed()
            .setAuthor(`Vous avez été banni du serveur ${message.guild.name}`)
            .setColor("RED")
            .setDescription(`Vous avez été banni par : ${message.author.tag}\n Raison: ${banRaison}\n Temps du banissement : Définitif`)
            .setThumbnail(message.guild.iconURL())


        banUser.send(banmsg)
        message.guild.member(banUser).ban();
        message.channel.send(banEmbed)

    }
}

