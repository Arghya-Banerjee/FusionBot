const Discord = require('discord.js')

module.exports = {
    name: 'estd',
    description: 'to know when the server was established',
    aliases: ['established','establish'],
    execute(message, args) {

        let estdEmbed = new Discord.MessageEmbed()
        .setTitle('Established')
        .setColor('#00d9ff')
        .setDescription(`**FUSION BOOTCAMP was Established on 20th April 2019**`)

        message.channel.send({embeds : [estdEmbed]});
    }
}