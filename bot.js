require("dotenv").config();

const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.BOTTOKEN);

client.on('ready',readyDiscord);

function readyDiscord() {
    console.log('logged in!! gnomesayinnn!')
}
replies = [
    'In this park it’s one muthafucka for one and all muthafucka for all muthafucka’s',
    'We ain’t down with killin’, we down with chillin’. Peace!',
    'My rhymes and mic are like a corporate merger, they go together like Randy’s gut and cheeseburger',
    'What are you from the department of knowatimsayin’..you takin’ a knowhatim census',
    'Brush them sluts',
    'Escu me GORILLA, we da fuck out',
    'Jules, I know I may come across hard as fuck all the time nomesayin, but every mafucka needs a boost of confidence from time to time',
    'Naw, man, I don’t play guns, mafucka',
    'I spin more ryhmes than a lazy Susan, but I’m innocent until my guilt is proven — peace Sunnyvale straight the fuck up',
    'It’s rainin mahfuckuhs'
]

client.on('message', (msg) => {
    if(msg.channel.id === '900432030435799181' && msg.content === '!quote'){
        // msg.reply('gnomeeesayyinnn!!')
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }
})


