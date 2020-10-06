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
	    let authorInput = new input.createInput(message);
    }
})
client.login('YOUR_TOKEN')
```
Now when a user does `!input` they have 30 seconds to send something, and it will send what they sent!

## Note

The content return function isn't working just yet, so it is just set to do this:
![](https://i.imgur.com/e4fihgt.png)

It soon will be set to make the `authorInput` value set to the input given.

## Todo
- Add a time limit that can be edited (default set to 30 seconds for right now)
- Add a input expired message that can be edited
- Add a way to be able to get a value out of the input