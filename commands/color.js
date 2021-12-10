module.exports = {
    name: 'color',
    description: 'To give Color Roles',

    async execute(message, args) {

        await (
            message.member.roles.remove('899875539412742224'),  //Red
            message.member.roles.remove('899875678613274654'),  //Sky
            message.member.roles.remove('899875723890819072'),  //Blue
            message.member.roles.remove('899875862202179624'),  //Light Green
            message.member.roles.remove('899875936978227230'),  //Green
            message.member.roles.remove('899875772452438086'),  //Yellow
            message.member.roles.remove('899875638515757118')   //Orange
        )

        if (!args[0]) return (message.reply('Mention the color you want please'))
        else if (args[0] === 'red') { await message.member.roles.add('899875539412742224') }
        else if (args[0] === 'sky') { await message.member.roles.add('899875678613274654') }
        else if (args[0] === 'blue') { await message.member.roles.add('899875723890819072') }
        else if (args[0] === 'light green') { await message.member.roles.add('899875862202179624') }
        else if (args[0] === 'green') { await message.member.roles.add('899875936978227230') }
        else if (args[0] === 'yellow') { await message.member.roles.add('899875772452438086') }
        else if (args[0] === 'orange') { await message.member.roles.add('899875638515757118') }
        else if (args[0] === 'none') {
            await(
                message.member.roles.remove('899875539412742224'),  //Red
                message.member.roles.remove('899875678613274654'),  //Sky
                message.member.roles.remove('899875723890819072'),  //Blue
                message.member.roles.remove('899875862202179624'),  //Light Green
                message.member.roles.remove('899875936978227230'),  //Green
                message.member.roles.remove('899875772452438086'),  //Yellow
                message.member.roles.remove('899875638515757118')   //Orange
            )
        }
    }
}