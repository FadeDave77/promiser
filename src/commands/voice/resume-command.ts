import { Command } from 'discord-akairo';
import { MessageReaction } from 'discord.js';
import { Message } from 'discord.js';

export default class ResumeCommand extends Command {
	public constructor() {
		super('resume', {
			aliases: ['resume'],
			description: {
				content: 'Resumes music playback.',
				usage: 'resume',
				examples: ['resume'],
			},
			channel: 'guild',
		});
	}

	public async exec(message: Message): Promise<Message | MessageReaction> {
		// if (!this.client.player.getQueue(message).paused) return message.util!.send('Music is not paused!');
		// "fir" for pause not working right
		this.client.player.setVolume(message, 100);
		// this.client.player.resume(message);
		return message.react('👌');
	}
}