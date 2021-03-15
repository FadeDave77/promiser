import { Message, MessageEmbed } from 'discord.js';
import { Listener } from 'discord-akairo';
import { Queue, Track } from 'discord-player';

export default class TrackAddListener extends Listener {
	public constructor() {
		super('trackadd', {
			event: 'trackAdd',
			emitter: 'player',
		});
	}

	public async exec(message: Message, queue: Queue, track: Track): Promise<Message> {
		const embed = new MessageEmbed;
		embed.setTitle('Track added to queue')
			.setDescription(`[Link](${track.url})\nTitle: ${track.title}\nChannel: ${track.author}\nDuration: ${track.duration}\nRequested by: ${track.requestedBy.tag}\nTracks still in queue: ${track.queue.tracks.length - 1}`)
			.setThumbnail(track.thumbnail)
			.setColor('RANDOM');
		return message.util!.sendNew(embed);
	}
}