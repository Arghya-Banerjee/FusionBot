const Discord = require('discord.js')

module.exports = {
    name: 'prefixhelp',
    description: 'To help user with prefix',

    execute(message, args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f2ff00')
        .setTitle('PREFIX')
        .setDescription('To demonstrate the prefix for each custom bot on the server. Individual bot prefix can be found on bot status for help')
        .addFields(
            {name: '`FusionBot`', value: '**-**'},
            {name: '`CrazyMusic`', value: '**>**'},
            {name: '`Fusion Music 1`', value: '**%**'}
        )
    
        message.channel.send({ embeds: [ newEmbed ]})        
    }



}