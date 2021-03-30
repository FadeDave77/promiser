import { Listener } from 'discord-akairo';
import { OwnerId } from '../../config';
import { Message } from 'discord.js';

export default class UnhandledErrorListener extends Listener {
	constructor() {
		super('unhandlederror', {
			event: 'error',
			emitter: 'process',
		});
	}
	public async exec(error: string): Promise<Message[] | undefined> {
		// eslint-disable-next-line no-console
		console.error(error);
		void (await this.client.users.fetch(OwnerId)).dmChannel?.send(` I have encountered an error on ${this.client.user?.tag} @ ${new Date().toString().substr(0, 31)} o.O`);
		return (await this.client.users.fetch(OwnerId)).dmChannel?.send('`' + error + '`', { split: true });
	}
}
