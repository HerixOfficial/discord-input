const Discord = require('discord.js');

module.exports.createInput = function(message) {
    let expired = true;
    const inputCollector = message.channel.createMessageCollector(m => (m.author.id === message.author.id), { max: 1, time: 30000 });
     inputCollector.on('collect', m => {
         expired = false;
         return messsage.channel.send(new Discord.MessageEmbed().setTitle('Your Input').setDescription(`\`\`\`${m.content}\`\`\``));
     });
     setTimeout(() => {
        if (expired == true) {
            expired = false;
            return message.reply(':x: | Time\'s up!');
        }
     }, 30000);
     /* await message.channel.awaitMessages(m => (m.author.id === message.author.id), {
        max: 1,
        time: 30000,
        errors: ['time'],
    }).catch((err) => {
        // if the author of the commands does not confirm the backup loading
        return message.channel.send(':x: | Time\'s up!');
    }); */
}