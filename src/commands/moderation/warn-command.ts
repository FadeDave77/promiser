import { Command } from 'discord-akairo';
import { Message, GuildMember } from 'discord.js';
import { Repository } from 'typeorm';
import { OwnerId } from '../../config';

import { Warns } from '../../models/warns';

export default class WarnCommand extends Command {
	public constructor() {
		super('warn', { // name
			aliases: ['warn', 'warning'], // aliases
			description: {
				content: 'Warn users who are doing bad things.', // description
				usage: 'warn <member> (reason)', // how to use
				examples: ['warn @FadeDave#7005 he is a naughty boi'], // exampleArray
			},
			channel: 'guild',
			userPermissions: ['MANAGE_MESSAGES'],
			args: [
				{
					id: 'member',
					type: 'member',
					prompt: {
						start: (msg: Message) => `Provide a member to warn, ${msg.author}:`,
						retry: (msg: Message) => `Provide a valid member to warn, ${msg.author}:`,
					},
				},
				{
					id: 'reason',
					type: 'string',
					match: 'rest',
					default: 'None',
				},
			],
		});
	}
	public async exec(message: Message, { member, reason }: { member: GuildMember, reason : string }): Promise<Message> {
		const warnRepo: Repository<Warns> = this.client.db.getRepository(Warns);
		if (member.roles.highest.position >= message.member!.roles.highest.position && message.author.id !== message.guild!.ownerID && message.author.id !== OwnerId) return message.util!.reply('The member you are trying to warn, has higher or equal roles to you!');
		await warnRepo.insert({
			guild: message.guild!.id,
			user: member.id,
			moderator: message.author.id,
			time: (Math.round((Date.now()) / 1000)),
			reason: reason,
		});
		return message.util!.send(`**${member.user.tag}** has been warned by **${message.author.tag}**, with reason \`${reason}\`.`);
	}
}
