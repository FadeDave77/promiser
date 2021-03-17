import { Command } from 'discord-akairo';
import { MessageReaction } from 'discord.js';
import { Message } from 'discord.js';

export default class ClearCommand extends Command {
	public constructor() {
		super('clear', {
			aliases: ['clear'],
			description: {
				content: 'Clear the queue.',
				usage: 'clear',
				examples: ['clear'],
			},
			channel: 'guild',
		});
	}
	public async exec(message: Message): Promise<Message | MessageReaction | undefined> {
		if (!this.client.player.getQueue(message)) return message.util?.send('There is no queue to clear!');
		this.client.player.clearQueue(message);
		return message.react('👌');
	}
}
