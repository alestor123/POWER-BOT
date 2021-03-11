var power = require('./power');
module.exports = msg => {
var key = msg.content.split(' ')[1]
if(msg.content.startsWith('power')&&msg.content.split(' ')[1]) if(power[key]){  
power[key]() 
msg.reply('Done !!')
}
else msg.reply('We got some prob !!')
}