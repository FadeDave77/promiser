import { Message, MessageEmbed } from 'discord.js';
import { Listener } from 'discord-akairo';
import { Queue, Playlist } from 'discord-player';

export default class PlaylistAddListener extends Listener {
	public constructor() {
		super('playlistadd', {
			event: 'playlistAdd',
			emitter: 'player',
		});
	}

	public async exec(message: Message, queue: Queue, playlist: Playlist): Promise<Message | undefined> {
		const embed = new MessageEmbed();

		embed
			.setTitle('Playlist added to queue')
			.setDescription(
				`[Link](${playlist.url})\nTitle: ${playlist.title}\nChannel: ${playlist.channel?.name}\nRequested by: ${playlist.requestedBy.tag}\nSongs added: ${
					playlist.videoCount
				}\nTracks still in queue: ${queue.tracks.length - 1}`,
			)
			.setThumbnail(playlist.thumbnail)
			.setColor('RANDOM');
		return message.util?.sendNew(embed);
	}
}
