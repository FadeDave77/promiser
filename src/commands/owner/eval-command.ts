import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import util from 'util';
import { OwnerId, OwnerAvatar, Prefix } from '../../config';

export default class EvalCommand extends Command {
	public constructor() {
		super('eval', { // name
			aliases: ['eval'], // aliases
			description: {
				content: 'Evaluate an expression', // description
				usage: '', // how to use
				examples: [], // exampleArray
			},
			ownerOnly: true,
			args: [
				{
					id: 'code',
					type: 'string',
					match: 'rest',
				},
			],
		});
	}
	public async exec(message: Message, { code }: {code: string}): Promise<void|Message> {
		if (code.toLowerCase().includes('token')) return message.util!.send('bro you think I would give you my token? fuck off');
		if (!OwnerId && !OwnerAvatar && !Prefix) return console.log('oeuf');
		const clean = (text: string) => {
			if (typeof (text) === 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
			else return text;
		};
		try {
			let evaled = await eval(code);
			if (typeof evaled !== 'string') evaled = util.inspect(evaled);
			if (!message.content.includes('-n')) return message.util!.send(clean(evaled), { code:'xl' }).catch((err)=>{message.util!.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);});
		}
		catch (err) {message.util!.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);}
	}
}
