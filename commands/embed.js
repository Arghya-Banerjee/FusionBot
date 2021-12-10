const { execute } = require("./ping");

module.exports = {
    name: 'embed',
    description: 'To make an embeded message',

    execute(message, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f2ff00')
        .setTitle('Rules')
        .setURL('Hello.com')
        .setDescription('This is a embed for server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be Nice'},
            {name: 'Rule 2', value: 'Be Good'},
            {name: 'Rule 3', value: 'Be Jodd'}
        )
        .setImage('https://www.google.com/search?q=rules+image&rlz=1C1CHBD_enIN962IN962&sxsrf=AOaemvKG_UMtxkfJbaQ5whwQg7ywGuC6oQ:1634622369010&tbm=isch&source=iu&ictx=1&fir=vr6B2BGb-wzU8M%252C8EFsFGDnL3nSyM%252C_%253BbowjmhEFoHP9YM%252CsF4XSw07N1aceM%252C_%253BepPgytnj4OiiUM%252CL3iL4Xm-RbaZkM%252C_%253B57ACsz11Zei8nM%252Cr3hzo87yKRg6MM%252C_%253BbX-cetfgh6SgQM%252CL3iL4Xm-RbaZkM%252C_%253Bl52gr_UiyVsKSM%252CsF4XSw07N1aceM%252C_%253BGWz-WaXqPLJ_bM%252CKzFVDgvw6pGeXM%252C_%253B7EXeAtYYD5zqwM%252C8EFsFGDnL3nSyM%252C_%253B-EazceWCk7E8BM%252C-JmtnAFbiafc-M%252C_%253B5hHiJ_uNiAR2vM%252Cau7PKwWg-iVbQM%252C_%253BlLbOcu6NWirvYM%252C8EFsFGDnL3nSyM%252C_%253BeOzbsrz4jnGQ1M%252CT79ykQq434DpFM%252C_%253BQgEgzTyNzDCTcM%252Ckk3aByTCDjRjvM%252C_%253BffIM7E-2w9b8fM%252CsF4XSw07N1aceM%252C_&vet=1&usg=AI4_-kSsqGU3m8kCfmu0CI4CHAA1uZWGZg&sa=X&ved=2ahUKEwi_ypXt4tXzAhUhzjgGHU0wDfQQ9QF6BAgZEAE#imgrc=5hHiJ_uNiAR2vM')
        .setFooter('Make sure to check out and obey the Rules')
    
        message.channel.send(newEmbed)        
    }



}