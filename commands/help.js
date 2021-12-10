const { prefix } = require('../config.json')
const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: 'to help everyone use FusionBot',
    execute(message, args) {
        const helpEmbed = new Discord.MessageEmbed()
                    .setTitle(`StarBot's Help Menu`)
                    .setDescription(`**PREFIX - \`${prefix}\`**`)
                    .addField("`ping`", "Check my latency to discord servers :D")
                    .addField("`hi`", "Say hello to me :D")
                    .addField("`estd`", `Show when this server was established\n**Usage: ${prefix}]**`)
                    .addField("`c <num>`", `Clear the last <num> messages\n**Usage: ${prefix}c [amount]**`)
                    .addField("`mute`", `Mute an user(only for admins)\n**Usage: ${prefix}mute [@USER]**`)
                    .addField("`unmute`", `Unmute an user(only for admins)\n**Usage: ${prefix}unmute [@USER]**`)
                    .addField("`kick`", `Kick someone for being disgracefull(only for admins)\n**Usage: ${prefix}kick [@USER]**`)
                    .addField("`ban`", `Ban someone for being naughty(only for admins)\n**Usage: ${prefix}ban [@USER]**`)
                    .addField("`rps`", `A fun Rock Paper Scissor Cut Game!!\n**Usage: ${prefix}rps [rock / paper / scissors]**`)
                    .addField("`color <colour>`", `Add your fav color role for the server\n**Usage: ${prefix}color [rock / paper / scissors]**`)
            message.channel.send({ embeds : [helpEmbed] });
        }
    }