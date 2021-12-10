module.exports = {
    name: 'c',
    description: 'to del existing messages',
    aliases: ['clear','del','delete'],
    async execute(message, args) {
        
        if(!args[0]) { args[0]=2 }
        // if(!args[0]) return message.reply("Please enter the number of msg to delete");
        if(isNaN(args[0])) return message.reply("Please type a real number");

        if(args[0] > 100) return message.reply("You cannot delete more than a 100 msg at once");
        if(args[0] < 1) return message.reply("You must delete asleast 1 message");

        if(message.member.roles.cache.has('893795417190465546')) {

            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            });
        }
        else(message.reply('You do not have the permission to clear messages!!'))

    }
}