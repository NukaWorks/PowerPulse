const {MessageEmbed} = require("discord.js");
const Discord = require("discord.js");
const generator = require('generate-password');
const fetch = require('node-superfetch');
module.exports = {
    name: "password",
    cooldown: 60,
    aliases: ["mdp"],

    async execute(message, args, client) {

        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var times = (`[${0}:${1}:${0}]/`);

        var caract = new MessageEmbed()
            .setTitle("Combien de caractères souhaitez-vous ?")
            .setFooter(message.author.tag)
            .setTimestamp()
            .setColor("GREEN")

        var yesno1 = new MessageEmbed()
            .setTitle("Le mot de passe peut-il contenir des nombres ? oui/non")
            .setFooter(message.author.tag)
            .setTimestamp()
            .setColor("GREEN")

        var ouinon2 = new MessageEmbed()
            .setTitle("Le mot de passe peut-il contenir des symboles ? oui/non")
            .setFooter(message.author.tag)
            .setTimestamp()
            .setColor("GREEN")

        var succes = new MessageEmbed()
            .setTitle(":white_check_mark: Mot de passe envoyé en message privé !")
            .setDescription("Si vous ne recevez pas le mot de passe, vérifiez que vos MP sont bien activé !")
            .setFooter(message.author.tag)
            .setTimestamp()
            .setColor("GREEN")

        var error1 = new MessageEmbed()
            .setTitle(":warning: Veuillez entrer un nombre valide !")
            .setFooter(message.author.tag)
            .setTimestamp()
            .setColor("GREEN")

        var error2 = new MessageEmbed()
            .setTitle(":warning: Minimum : 0 | Maximum : 1969 ( Combien de caractères souhaitez-vous ? )")
            .setFooter(message.author.tag)
            .setTimestamp()
            .setColor("GREEN")

        var error3 = new MessageEmbed()
            .setTitle(":warning: Répondez par `oui` ou par `non` !")
            .setFooter(message.author.tag)
            .setTimestamp()
            .setColor("GREEN")

        var error22 = new MessageEmbed()
            .setTitle(":warning: Le temps est écoulé !")
            .setFooter(message.author.tag)
            .setTimestamp()
            .setColor("GREEN")


        message.reply(caract);

        var nb_caract = "nd";
        var nombres = "nd";
        var symboles = "nd";

        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 300000});

        collector.on('collect', message => {
            if (nb_caract === "nd" && nombres === "nd" && symboles === "nd") {
                if (isNaN(message.content)) return message.reply(error1);
                if (parseInt(message.content) > 1969) return message.reply(error2)
                nb_caract = message.content;
                return message.reply(yesno1);
            }

            if (nb_caract !== "nd" && nombres === "nd" && symboles === "nd") {
                var response = message.content.toLowerCase();
                if (response !== "oui" && response !== "non") return message.reply(error3);
                if (response === 'oui') nombres = true;
                if (response === 'non') nombres = false;
                return message.reply(ouinon2);
            }
            if (nb_caract !== "nd" && nombres !== "nd" && symboles === "nd") {
                var response = message.content.toLowerCase();
                if (response !== "oui" && response !== "non") return message.reply(error3);
                if (response === 'oui') symboles = true;
                if (response === 'non') symboles = false;
                return collector.stop('ok');
            }
        });

        collector.on('end', (collected, reason) => {

            if (reason === "time") {
                return message.reply(error22).then(d => d.delete(5000));
            }
            if (reason === "ok") {
                var password = generator.generate({
                    length: nb_caract,
                    numbers: nombres,
                    symboles: symboles
                });
                if (password.length > 1970) {
                    fetch.post(`https://hastebin.com/documents`).send(password).then(body => {
                        message.author.send('```Le mot de passe compte trop de caractères, il se trouve donc sur hastebin. Le lien : https://hastebin.com/' + body.body.key + '```');
                        return message.channel.send(succes);
                    });
                } else {
                    message.author.send('```Mot de passe généré : ' + password + '```');
                    return message.channel.send(succes);
                }
            }
            if (reason !== "time" && reason !== "ok") {
                return message.reply('erreur.').then(d => d.delete(5000));
            }
        });

    }
}