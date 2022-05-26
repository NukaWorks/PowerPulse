const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "annonce",
    cooldown: 1,
    aliases: ["ans"],

    async execute(message, args, client) {
        message.delete()

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            var error_permissions = new MessageEmbed()
                .setDescription(`Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.`)
                .setFooter(`Pour utilisée cette commande vous devez disposez de la permissions ADMINISTRATOR.`, message.author.displayAvatarURL({
                    size: 512,
                    dynamic: true
                }))
                .setColor("RED")
                .setTitle(`Accès à la commande refusée.`)
            message.channel.send(error_permissions)
        }
        if (message.member.hasPermission("ADMINISTRATOR")) {
            let arg = message.content.split(" ").slice(1);
            let contenu = arg.join(" ");

            var nomessage = new MessageEmbed()
                .setTitle("Une erreur est survenue !")
                .setDescription("Veuillez préciser le message contenu dans l'annonce.")
                .setColor("RED")


            if (!args[0]) return message.channel.send(nomessage)

            var annonce = new MessageEmbed()
                .setTitle("📝 __Annonce :__")
                .setDescription(`**${contenu}**`)
                .setTimestamp()
                .setFooter(`${message.author.username}`, message.author.displayAvatarURL({size: 512, dynamic: true}))
                .setColor("RANDOM")
            message.channel.send(annonce)

        }
    }
}
