import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';
import ytdl from 'ytdl-core-discord';

export default class PlayCommand extends Command {
	public constructor() {
		super('play', {
			aliases: ['play'],
			description: {
				content: 'Play music in the user\'s voice channel.',
				usage: 'play <search or link>',
				examples: ['play cute cats and kittens', 'play https://youtu.be/dQw4w9WgXcQ'],
			},
			args:[
				{
					id: 'inpu',
					type: 'string',
					match: 'rest',
					prompt: {
						start: 'Please input a search string or a URL.',
						retry: 'Please input a valid search string or URL.',
					},
				},
			],
		});
	}
	public async exec(message: Message, inpu: string): Promise<Message> {
		const input = inpu[<any>'inpu']!;
		if (!message.member?.voice.channel) return message.util!.send('Please join a voice channel first!');
		const connection = await message.member.voice.channel.join();
		await connection.play(await ytdl(input, { filter: 'audioonly', highWaterMark: 50, liveBuffer: 50 }), { type: 'opus', highWaterMark: 50, volume: false, fec: true });
        
		const embed = new MessageEmbed;
		embed.setTitle('Playing ' + input + ' in voice channel ' + message.member.voice.channel.name);
		return message.util!.send(embed);
	}
}
