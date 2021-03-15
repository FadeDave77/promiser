import { Listener } from 'discord-akairo';

export default class UnhandledRejectionListener extends Listener {
	constructor() {
		super('unhandledrejection', {
			event: 'unhandledRejection',
			emitter: 'process',
		});
	}
	public exec(error: string): void {
		console.error(error);
	}
}