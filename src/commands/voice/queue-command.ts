import { Command } from 'discord-akairo';
import { MessageEmbed } from 'discord.js';
import { Message } from 'discord.js';

export default class QueueCommand extends Command {
	public constructor() {
		super('queue', {
			aliases: ['queue', 'q'],
			description: {
				content: 'Gets the queue of current server.',
				usage: 'queue',
				examples: ['queue'],
			},
			channel: 'guild',
		});
	}

	public async exec(message: Message): Promise<Message> {
		if (!this.client.player.getQueue(message)) return message.util!.send('There is no queue in this server!');

		const embed = new MessageEmbed;
		embed.setTitle('Queue of `' + message.guild?.name + '`')
			.setDescription('**`NOW PLAYING`**')
			.setColor('RANDOM');
		this.client.player.getQueue(message).tracks.forEach(e => embed.addField(`\`${this.client.player.getQueue(message).tracks.indexOf(e) + 1}\` ${e.title}`, `Channel: ${e.author}\nDuration: ${e.duration}\nRequested by: ${e.requestedBy.tag}`));
		return message.util!.send(embed);
	}
}