const Discord = require('discord.js');

module.exports.createInput = function(message) {
    this.time = 30000;

    class Time {
        constructor(message) {
             this.message = message
        }
        setTime(time) {
               this.time = time
        }
    }
     
 
     const inputCollector = this.message.channel.createMessageCollector(m => (m.author.id === this.message.author.id), { max: 1, time: 30000 });
     inputCollector.on('collect', m => { return console.log(m); });
     setTimeout(() => {
        return this.message.reply('too late!');
     }, 30000);
}