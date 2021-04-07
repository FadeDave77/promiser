import { Command } from 'discord-akairo';
import { MessageEmbed } from 'discord.js';
import { Message, GuildMember } from 'discord.js';

export default class FuckCommand extends Command {
	public constructor() {
		super('fuck', {
			// name
			aliases: ['fuck', 'fuq'], // aliases
			description: {
				content: 'Fuck someone :smirk:', // description
				usage: 'fuck <user>', // how to use
				examples: ['fuq @FadeDave#7005', 'fuck 347822600136949763'], // exampleArray
			},
			channel: 'guild',
			args: [
				{
					id: 'member',
					type: 'member',
					prompt: {
						start: (msg: Message) => `Provide a member to fuck, ${msg.author}:`,
						retry: (msg: Message) => `Provide a valid member to fuck, ${msg.author}:`,
					},
				},
			],
		});
	}
	public async exec(message: Message, { member }: { member: GuildMember }): Promise<Message | void> {
		const fuqarray: string[] = [
			'https://cdn.discordapp.com/attachments/789786226344722452/829299026377572403/mp4.gif',
			'https://media.discordapp.net/attachments/508813333173108736/663272718107672587/emote-9.gif',
			'https://cdn.discordapp.com/attachments/789786226344722452/829299357991698432/mp4.gif',
			'https://cdn.discordapp.com/attachments/789786226344722452/829299502518239262/mp4.gif',
			'https://cdn.discordapp.com/attachments/789786226344722452/829299628762726400/mp4.gif',
		];
		const rnd1 = Math.floor(Math.random() * fuqarray.length);
		const wordarray: string[] = [' on the counter', ' senselessly', ' hardcore', ' doggystyle', ' in missionary', ' in the ass', ' orally', ' with their big cock'];
		const rnd2 = Math.floor(Math.random() * wordarray.length);
		const embed = new MessageEmbed()
			.setColor('#990077')
			.setTitle(message.author.username + ' fucks ' + member.user.username + String(wordarray[rnd2]) + ' :smirk: :flushed:')
			.setImage(fuqarray[rnd1] ?? 'https://media.tenor.co/videos/f076b2130ae88b599fa2a020d1244449/mp4');
		return message.util?.reply(embed);
	}
}
