const Discord = require('discord.js');

// Input
const { startInput } = require('./createInput');
module.exports.createInput = async function(message) { return startInput(member, message) }