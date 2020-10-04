# discord-input
`discord-input` is a (WIP) javascript package for your discord bot. It creates simple input prompts for users to input values or information. 
## Table of Contents
1. [Install](https://github.com/HerixOfficial/discord-input#Install)
2. [How to use](https://github.com/HerixOfficial/discord-input#how-to-use)
## Install

```sh
$ npm i discord-input
```

## How to use
Start with the basics of a discord bot (Getting the token, making the files, etc) then, in your main file put this:
```js
const Discord = require('discord.js')
const input = require('discord-input')
const client = new Discord.client()

client.on('ready', () => {
    console.log(`${client.tag} is online!`)
})

client.on('message', message => {
    if (message.content.startsWith() === "!input") {
	    let authorInput = input.createInput(message).setTime(30000);
	    message.channel.send(authorInput);
    }
})
client.login('YOUR_TOKEN')
```
Now when a user does `!input` they have 30 seconds to send something, and it will send what they sent!