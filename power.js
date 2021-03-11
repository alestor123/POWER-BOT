var { execSync } = require('child_process');
function power() {
console.warn('Use Power Module Carefully !!')
}
power.sleep = () => {
if (process.platform === 'darwin') execSync('pmset sleepnow')
else if (process.platform === 'linux') execSync('sudo systemctl suspend')
else if (process.platform === 'win32') execSync('execSyncdll32.exe powrprof.dll,SetSuspendState 0,1,0')
else throw Error('Unkown OS')
}
power.off = () => {
if (process.platform === 'darwin' || 'linux') execSync('sudo shutdown -h now') 
else if (process.platform === 'win32') execSync('shutdown -s -t ')
else throw Error('Unkown OS')
}
power.reboot = () => {
if (process.platform === 'darwin' || 'linux') execSync('reboot') 
else if (process.platform === 'win32') execSync('shutdown /r')
else throw Error('Unkown OS')    
}
module.exports = power