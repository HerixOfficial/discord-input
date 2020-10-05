const Discord = require('discord.js');

module.exports.createInput = function(message) {
     let expired = true;
     const inputCollector = message.channel.createMessageCollector(m => (m.author.id === message.author.id), { max: 1, time: 30000 });
     inputCollector.on('collect', m => {
         expired = false;
         return message.channel.send(`\`\`\`${m.content}\`\`\``); 
     });
     setTimeout(() => {
        if (expired == true) {
            expired = false;
            return message.reply('too late!');
        }
     }, 30000);
}