 const Discord = require('discord.js');

 module.exports.startInput = async function (message) {
    // Time Limit
    let timeLimit = 30000;
    setTime(number); { if(isNaN(number)) timeLimit = 30000; else timeLimit = number; }

    const inputCollector = message.channel.createMessageCollector(m => (m.author.id === message.author.id), { max: 1, time: 15000 });
    inputCollector.on('collect', m => { return m; });
    setTimeout(() => {
       
    }, 30000);
 }