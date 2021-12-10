module.exports = {
    name: 'hi',
    description: "This is a hello command!",
    aliases: ['hello', 'wassup'],
    execute(message, args) {
        message.reply('Hey, Hello There')
    }
}