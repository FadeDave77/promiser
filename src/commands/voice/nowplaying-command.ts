import { Command } from 'discord-akairo';
import { MessageEmbed } from 'discord.js';
import { Message } from 'discord.js';

export default class NowPlayingCommand extends Command {
	public constructor() {
		super('nowplaying', {
			aliases: ['nowplaying', 'np'],
			description: {
				content: 'Gets the currently playing song on the server.',
				usage: 'nowplaying',
				examples: ['np'],
			},
			channel: 'guild',
		});
	}

	public async exec(message: Message): Promise<Message | undefined> {
		if (!this.client.player.getQueue(message).playing) return message.util?.send('Nothing is playing in this server!');

		const embed = new MessageEmbed();
		const track = this.client.player.nowPlaying(message);
		embed
			.setTitle('Playing now')
			.setDescription(
				`[Link](${track.url})\nTitle: ${track.title}\nChannel: ${track.author}\nDuration: ${track.duration}\nRequested by: ${track.requestedBy.tag}\nTracks still in queue: ${
					track.queue.tracks.length - 1
				}\nProgress: ${this.client.player.createProgressBar(message)}`,
			)
			.setThumbnail(track.thumbnail)
			.setColor('RANDOM');
		return message.util?.send(embed);
	}
}
