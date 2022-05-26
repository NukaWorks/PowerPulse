const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "clear",
    cooldown: 1,
    aliases: ["purge"],

    async execute(message, args, client) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            var error_permissions = new MessageEmbed()
                .setDescription(`Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.`)
                .setFooter(`Pour utilisée cette commande vous devez disposez de la permissions MANAGE_MESSAGE.`, message.author.displayAvatarURL({
                    size: 512,
                    dynamic: true
                }))
                .setColor("RED")
                .setTitle(`Accès à la commande refusée.`)
            message.channel.send(error_permissions)
        }
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            let msg = message.content.split(' ').slice(1);
            if (!msg[0]) {
                var kevin = new MessageEmbed()
                    .setTitle("❎ Erreur de syntaxe !")
                    .setDescription("Merci de donner un chiffre entre 1 et 100 pour effectuer cette commande.")
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({
                        size: 512,
                        dynamic: true
                    }))
                    .setColor("#BE1931")
                message.channel.send(kevin)
            } else {
                let x = parseInt(msg[0], 10)
                if (x > 100) {
                    x = 100
                }

                message.channel.bulkDelete(x)
                var annonce = new MessageEmbed()
                    .setTitle(":white_check_mark: __Message(s) suprimé(s) avec succès.__")
                    .setDescription("**" + x + " message(s) supprimé(s).**")
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({
                        size: 512,
                        dynamic: true
                    }))
                    .setColor("#BE1931")
                message.channel.send(annonce)
                    .then(msg => {
                        msg.delete({timeout: 10000});
                    })
                    .catch();
            }
        }
    }
}