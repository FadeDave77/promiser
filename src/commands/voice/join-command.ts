import { Command } from 'discord-akairo';
import { MessageReaction } from 'discord.js';
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
			channel: 'guild',
		});
	}
	public async exec(message: Message): Promise<Message | MessageReaction> {
		if (!message.member?.voice.channel) return message.util!.send('Please join a voice channel first!');
		await message.member.voice.channel.join();
		return message.react('👌');
	}
}
