import { Listener } from 'discord-akairo';
import { OwnerId } from '../../config';

export default class UnhandledRejectionListener extends Listener {
	constructor() {
		super('unhandledrejection', {
			event: 'unhandledRejection',
			emitter: 'process',
		});
	}
	public async exec(error: string): Promise<void> {
		console.error(error);
		(await this.client.users.fetch(OwnerId)).dmChannel!.send(` I have encountered an error on ${this.client.user!.tag} @ ${new Date().toString().substr(0, 31)} o.O`);
		(await this.client.users.fetch(OwnerId)).dmChannel!.send('`error`');
	}
}