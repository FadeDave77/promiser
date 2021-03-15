import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';
import { gapiKey } from '../../config';
import ytdl from 'ytdl-core-discord';
import fetch from 'node-fetch';

export default class PlayCommand extends Command {
	public constructor() {
		super('play', {
			aliases: ['play'],
			description: {
				content: 'Play music in the user\'s voice channel.',
				usage: 'play <search or link>',
				examples: ['play cute cats and kittens', 'play https://youtu.be/dQw4w9WgXcQ'],
			},
			channel: 'guild',
			args:[
				{
					id: 'inpu',
					type: 'string',
					match: 'rest',
					prompt: {
						start: 'Please input a search string or URL.',
						retry: 'Please input a valid search string or URL.',
					},
				},
			],
		});
	}
	public async exec(message: Message, inpu: string): Promise<Message | void> {
		const input = inpu[<any>'inpu']!;
		if (!message.member?.voice.channel) return message.util!.send('Please join a voice channel first!');
		if (!this.client.voice.connections.find(e => e.channel === message.member?.voice.channel)) await message.member.voice.channel.join();
		const connection = await this.client.voice.connections.find(e => e.channel === message.member?.voice.channel);
		const data = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${input}&part=snippet&maxResults=10&key=${gapiKey}&id.kind=youtube#video`).then(res => res.json());
		if (!data.items[0].id.videoId) return message.util!.send('No video found!');
		await connection?.play(await ytdl(data.items[0].id.videoId, { filter: 'audioonly', quality: 'highestaudio' }), { type: 'opus', highWaterMark: 250, volume: false, fec: true, bitrate: 'auto' });
		const embed = new MessageEmbed;
		embed.setTitle('Playing `' + data.items[0].snippet.title + '` in voice channel `' + message.member.voice.channel.name + '`');
		return message.util!.send(embed);
	}
}
