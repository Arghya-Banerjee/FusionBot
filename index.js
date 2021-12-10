const Discord = require('discord.js');
const { prefix, token, WelcomeID, LogsID, RolesID, RulesID, HelpID } = require('./config.json');
// const moment = require('moment');
// const member = require('discord.js')
// const config = require('./config.json');

const client = new Discord.Client(
    {
        intents:
            [
                Discord.Intents.FLAGS.GUILDS,
                Discord.Intents.FLAGS.GUILD_MEMBERS,
                Discord.Intents.FLAGS.GUILD_MESSAGES,
                Discord.Intents.FLAGS.DIRECT_MESSAGES,
                Discord.Intents.FLAGS.GUILD_VOICE_STATES
            ]
    }
);

const fs = require('fs');

client.commands = new Discord.Collection();

const memberCounter = require('./counters/member-counter');
const { config } = require('process');
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('StarBot Bot is online!');

    memberCounter(client);
    client.user.setActivity(`${prefix}help`, {type: "LISTENING"})
});
 
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Unmuted');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('896057476217184288').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)

    // let welcomeEmbed = new Discord.MessageEmbed()
    //     .setColor('#00ff04')
    //     .setTitle(`${member.guild.name}`)
    //     .setDescription(`Welcome <@${member.user.id}> to **${member.guild.name}**!!\n Make sure to check the channels   below to get started\n **Latest Member Count : ${member.guild.memberCount}**`)
    //     .addFields(
    //     {name: ':book: Rules', value: `<#${RulesID}>`, inline: true},
    //     {name: ':book: Roles', value: `<#${RolesID}>`, inline: true},
    //     {name: ':bulb: Get Help', value: `<#${HelpID}>`, inline: true},
    //     )
    //     .setFooter(`${member.user.username}#${member.user.discriminator}`, member.user.displayAvatarURL({dynamic: true, size: 512}))

    // member.guild.channels.cache.get(WelcomeID).send({embeds : [welcomeEmbed]})


    // let LogEmbed = new Discord.MessageEmbed()
    //     .setColor('#eeff00')
    //     .setTitle(`${member.guild.name}`)
    //     .setDescription(`**About our new friend**`)
    //     .setThumbnail(member.user.displayAvatarURL({dynamic: true, size:512}))
    //     .addFields(
    //     {name: 'User Tag', value: `${member}`, inline: true},
    //     {name: 'Discriminator', value: `${member.user.discriminator}`, inline: true},
    //     {name: 'Bot', value: `${member.user.bot}`, inline: true},
    //     {name: 'Presence', value: `${member.user.presence.status}`, inline: true},
    //     {name: 'Joined Server At', value: `${momemt(member.joinedAt).format('DD MM YYYY')}`, inline: true},
    //     {name: 'Joined Discord At', value: `${moment(member.user.creationAt).format('DD MM YYYY')}`, inline: true},
    //     )
    //     .setFooter(`${member.user.username}#${member.user.discriminator}`, member.user.displayAvatarURL({dynamic: true, size: 512}))

    // member.guild.channels.cache.get(LogsID).send({embeds : [LogEmbed]})


});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        // client.commands.get('ping').execute(message, args);
        let pingEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Pong!!')
        .setDescription(`**Latency : ${client.ws.ping}**`)

        message.reply({embeds : [pingEmbed]})

        // message.channel.send(`Pong!! Latency: ${client.ws.ping}ms`)
    } 
    else if(command === 'hi'){
        client.commands.get('hi').execute(message, args);
    }
    else if(command === 'status'){
        client.commands.get('status').execute(message, args);
    }
    else if(command === 'estd'){
        client.commands.get('estd').execute(message, args);
    }
    else if(command === 'c'){  //Only for msgs posted within last 14 days
        client.commands.get('c').execute(message, args);
    }

    // else if(command === 'command'){
    //     client.commands.get('command').execute(message, args, Discord);
    // }
    else if(command === 'color'|| command === 'color'){
        client.commands.get('color').execute(message, args);
    } 
    else if(command === 'embed'){
        client.commands.get('embed').execute(message,args, Discord);
    }
    else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }
    else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
    // else if(command === 'stats'){
    //     const member = message.mentions.members.first();
    //     const embed = new Discord.MessageEmbed()
    //     .setAuthor(`StarBot`)
    //     // .setThumbnail(bot.avatarURL())
    //     // .addField('Created On', message.user.createdAt, true)
    else if(command === 'rps'){
        client.commands.get('rps').execute(message, args);
    }
    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
    else if(command === 'prefixhelp'){
        client.commands.get('prefixhelp').execute(message, args);
    }
    else if(command === 'myid'){
        client.commands.get('myid').execute(message, args);
    }


});


client.login(token)