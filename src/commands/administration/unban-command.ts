import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class UnbanCommand extends Command {
	public constructor() {
		super('unban', {
			// name
			aliases: ['unban', 'unyeet'], // aliases
			description: {
				content: 'Remove a previous ban.', // description
				usage: 'unban <user>', // how to use
				examples: ['unban 347822600136949763', 'unban FadeDave#7005'], // exampleArray
			},
			userPermissions: ['BAN_MEMBERS'],
			channel: 'guild',
			args: [
				{
					id: 'user',
					type: 'string',
					match: 'rest',
					prompt: {
						start: (msg: Message) => `Provide a user to unban, ${msg.author}:`,
						retry: (msg: Message) => `Provide a valid user to unban, ${msg.author}:`,
					},
				},
			],
		});
	}
	public async exec(message: Message, { user }: { user: string }): Promise<Message | undefined> {
		await message.guild?.fetchBans().then(async (bans) => {
			if (bans.size == 0) {
				return message.util?.send("This guild doesn't have any bans.");
			} else if (bans.find((u) => u.user.id === user)) {
				void message.guild?.members.unban(user);
				return message.util?.send(`${bans.find((u) => u.user.id === user)?.user.tag} unbanned successfully.`);
			} else if (bans.find((u) => u.user.tag == user)) {
				void message.guild?.members.unban(bans.find((u) => u.user.tag == user)!.user.id);
				return message.util?.send(`${bans.find((u) => u.user.tag == user)!.user.tag} unbanned successfully.`);
			}
		});
		return message.util?.send('No ban with the specified search term exists.');
	}
}
