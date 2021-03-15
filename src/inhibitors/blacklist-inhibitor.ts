import { Inhibitor } from 'discord-akairo';
import { Message } from 'discord.js';
import { Repository } from 'typeorm';

import { Blacklist } from '../models/blacklist';

export default class BlacklistInhibitor extends Inhibitor {
	public constructor() {
		super('blacklist', {
			reason: 'blacklist',
			type: 'all',
		});
	}

	public async exec(message: Message): Promise<any> {
		const blacklistRepo: Repository<Blacklist> = this.client.db.getRepository(Blacklist);
		return await blacklistRepo.findOne({ user: message.author.id });
	}
}
