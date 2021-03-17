import { Command } from 'discord-akairo';
import { Message, MessageEmbed, User } from 'discord.js';

export default class CockCommand extends Command {
	public constructor() {
		super('cock', {
			// name
			aliases: ['cock', 'coq'], // aliases
			description: {
				content: 'Get the size of cock :flushed:', // description
				usage: 'cock (member)', // how to use
				examples: ['cock', 'cock @FadeDave#7005'], // exampleArray
			},
			args: [
				{
					id: 'user',
					type: 'user',
					match: 'rest',
					default: (msg: Message) => msg.author,
				},
			],
		});
	}
	public async exec(message: Message, { user }: { user: User }): Promise<Message | undefined> {
		const embed = new MessageEmbed()
			.setTitle(`Oh, i see you got a cock there ${user.username} :eyes:`)
			.setColor('RANDOM')
			.setDescription(`It is **${Math.floor(Math.random() * 250) / 10}cm** long :hushed:`);

		return message.util?.send(embed);
	}
}
