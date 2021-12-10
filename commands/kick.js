module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args) {
        if (message.member.roles.cache.has('778223497956556870')) {
            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
            } else {
                message.channel.send(`You coudn't kick that member!`);
            }
        }
        else{
            message.reply('You dont have the permission to kick a member')
        }
    }
}