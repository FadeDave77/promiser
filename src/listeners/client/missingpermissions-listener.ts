import {Listener} from 'discord-akairo';
import { Message} from 'discord.js';

export default class MissingPermissionsCommand extends Listener {
    public constructor() {
        super('missingPermissions', {
            emitter: 'commandHandler',
            event: 'missingPermissions'
        });
    };
    public async exec(message: Message, command: Message, reason: string): Promise<Message> {
		if (reason == 'client') return message.util!.reply('The bot is missing permissions to execute the command!')
		if (reason == 'user') return message.util!.reply('You don\'t have permission to execute this command!')
        return message.util!.reply('Missing permissions! \`' + reason + '\`')
    };
};
