import { Inhibitor } from 'discord-akairo';
import { Message } from 'discord.js';

export default class BlacklistInhibitor extends Inhibitor {
	public constructor() {
		super('blacklist', {
			reason: 'blacklist',
			type: 'all',
		});
	}

	public exec(message: Message): any {
		const blacklist = ['6969'];
		return blacklist.includes(message.author.id);
	}
}
