const { prefix } = require('../config.json')

module.exports = {
    name: 'rps',
    description: 'to play rock paper scissor cut !!',
    execute(message, args) {
        const choice = [
            "rock",
            "paper",
            "scissors"
        ]
        const msg2 = args.join(" ");
        const res = choice[Math.floor(Math.random() * choice.length)]

        let msg = msg2.toLowerCase().trim()

        if(msg === "rock" || msg === "paper" || msg === "scissor") {

        var first = "You chose " + msg + " and i chose " + res + " so, "

        var second;

        if(msg === res) second = "its a Draw:neutral_face:!!"

        else if(msg === "scissor" && res === "paper") second ="l lose :pensive:"

        else if(msg === "paper" && res === "rock") second = "l lose :confused:"

        else if(msg === "rock" && res === "scissor") second = "l lose :tired_face:"

        else second = "I won :smirk: "

        reply = first + second

    } else{

      reply = `You did not choosed any options :/\n**Usage: ${prefix}rps [rock / paper / scissor]**`
    }

    message.channel.send(`${reply}`)
    }
}