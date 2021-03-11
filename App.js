var power = require('./power'),
{Client} = require('discord.js'),
funcs = require('./func'),
client = new Client();
module.exports = token => {
if(!token) throw Error('Please enter a token')
client.login(token)
client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));
client.on('message',funcs)
}