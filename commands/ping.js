const Discord = require("discord.js");

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

module.exports = {
    name: 'ping',
    description: "This is a ping command!",
    aliases: ['pong','p'],
    async execute(message, args) {

        if (message.member.roles.cache.has('893795417190465546')) {
            await message.channel.send({
                content : `pong!! Latency:${pung}ms`
            });
        }
        else{
            await message.channel.send({
                content : "You dont have the correct permission to use the code"
            });
        }
    }
}
