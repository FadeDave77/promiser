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

	public async exec(message: Message): Promise<Message | MessageReaction | undefined> {
		if (!this.client.voice.connections.find(e=> e.channel.guild === message.guild)) return message.util?.send('The bot is not connected!');
		if (!this.client.voice.connections.find(e=> e.channel === message.member?.voice.channel)) return message.util?.send('You are not in the same voice channel as the bot, you cannot control it!');
		// if (this.client.player.getQueue(message).paused) return message.util!.send('Music is already paused!');
		// "fix" for pause not working right
		this.client.player.setVolume(message, 0);
		// this.client.player.pause(message);
		return message.react('👌');
	}
}
