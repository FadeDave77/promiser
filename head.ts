#!/usr/bin/nodemon

//imports
//import * as Discord from 'discord.js';
//import {MessageEmbed} from 'discord.js';
import {Client, Discord, On, Once, ArgsOf, Command, CommandMessage, CommandNotFound} from '@typeit/discord';
import {config} from './config';

//client
const client = new Client({
    classes: [
      `${__dirname}/*Discord.ts`, // glob string to load the classes
      `${__dirname}/*Discord.js` // If you compile using "tsc" the file extension change to .js
    ],
    silent: false,
    variablesChar: ":"
});

//login
client.login(config.token)

client.on('ready', ()=>{
  console.log('bot ready')
})

@Discord('::')
abstract class AppDiscord {
  @Command('ping')
  private ping(command: CommandMessage) {
    command.reply('bonk')
  }
}

client.on('message', message => {
  if (message.content.startsWith('::ping')) {
    message.channel.send('bonk!')
  }
})
//test
//t
//testtesteste