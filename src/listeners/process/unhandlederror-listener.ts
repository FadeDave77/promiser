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
	public async exec(error: string): Promise<Message | undefined> {
		console.error(error);
		void (await this.client.users.fetch(OwnerId)).dmChannel?.send(` I have encountered an error on ${this.client.user?.tag} @ ${new Date().toString().substr(0, 31)} o.O`);
		if (error.length >= 2000) {
			const err1 = error.slice(0, error.length / 2);
			const err2 = error.slice(error.length / 2, error.length);
			const channel = (await this.client.users.fetch(OwnerId)).dmChannel;
			void channel?.send(err1);
			return channel?.send(err2);
		} else {
			return (await this.client.users.fetch(OwnerId)).dmChannel?.send('`' + error + '`');
		}
	}
}
