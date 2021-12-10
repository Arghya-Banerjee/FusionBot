module.exports = {
    name: 'status',
    description: 'To know the status of FushionBot',
    aliases: ['s'],

    async execute(message, args) {
        if (message.member.roles.cache.has('841924025769001010')) {
            await message.channel.send(`FushionBot is Online !!\nThe server name is ${guild.name}`);
        }
        else {
            await message.channel.send({
                content: "You dont have the correct permission to use the code"
            });
        }
    }
}
