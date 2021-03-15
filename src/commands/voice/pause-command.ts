import { Command } from 'discord-akairo';
import { MessageReaction } from 'discord.js';
import { Message } from 'discord.js';

export default class PauseCommand extends Command {
	public constructor() {
		super('pause', {
			aliases: ['pause'],
			description: {
				content: 'Pauses music playback.',
				usage: 'pause',
				examples: ['pause'],
			},
			channel: 'guild',
		});
	}

	public async exec(message: Message): Promise<Message | MessageReaction> {
		// if (this.client.player.getQueue(message).paused) return message.util!.send('Music is already paused!');
		// "fix" for pause not working right
		this.client.player.setVolume(message, 0);
		// this.client.player.pause(message);
		return message.react('👌');
	}
}