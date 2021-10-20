console.log('gnomesayinnn!')

const Discord = require('discord.js');

const client = new Discord.Client();

client.login('OTAwNDI5Mzc0MDAyNzI0OTg2.YXBMMw.EOI4I4jKAZHmov4a-S-8hx5ylAM');

client.on('ready',readyDiscord);

function readyDiscord() {
    console.log('logged in!! gnomesayinnn!')
}