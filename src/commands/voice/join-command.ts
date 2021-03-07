import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class JoinCommand extends Command {
    public constructor() {
        super('join', {
            aliases: ['join'],
            description: {
                content: 'Join the user\'s voice channel. ',
                usage: 'join',
                examples: ['join'],
            },
        });
    }
    public exec(message: Message): Promise<Message> {
        if (!message.member?.voice.channel) return message.util!.send('Please join a voice channel first!');
        message.member.voice.channel.join();
        return message.util!.send('Joined voice channel: ' + message.member.voice.channel.name);
    }
}
