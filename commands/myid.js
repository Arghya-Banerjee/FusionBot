const Discord = require('discord.js')

module.exports = {
    name: 'myid',
    description: 'to know the account ids of an user',
    aliases: ['established','establish'],
    execute(message, args) {

        let idEmbed = new Discord.MessageEmbed()
        .setTitle('CrazyCat')
        .setColor('BLUE')
        .setDescription(`Following are my ig ids:\n`)
        .addFields(
            {name: '**CSGO Main**', value: '**CrazyCat**', inline: true},
            {name: '**CSGO Non Prime**', value: '**A3JM7-UWSL**', inline: true},
            {name: '**Valorant Main**', value: '**CrazyCat#**', inline: true},
            {name: '**Valorant Fun**', value: '**CrazyCat#**', inline: true},

        )

        message.channel.send({embeds : [idEmbed]});
    }
}