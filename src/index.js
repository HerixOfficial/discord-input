const Discord = require('discord.js');

module.exports.createInput = function(message) {
     const inputCollector = message.channel.createMessageCollector(m => (m.author.id === message.author.id), { max: 1, time: 2000 });
     inputCollector.on('collect', m => { return console.log(m); });
     setTimeout(() => {
        return message.reply('too late!');
     }, 2000);
}