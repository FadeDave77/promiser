import { Command } from 'discord-akairo';
import {Message} from 'discord.js';
import util from 'util';

export default class EvalCommand extends Command {
    public constructor() {
        super('eval', { //name
            aliases: ['eval'], //aliases
            category: 'owner', //category of command
            description: {
                content: 'Evaluate an expression', //description
                usage: '', //how to use
                examples: [] //exampleArray
            },
            ratelimit: 6, //how many times can you execute / minute
            ownerOnly: true,
            args: [
                {
                    id: 'code',
                    type: 'string',
                    match: 'rest'
                }
            ]
        });
    }
    public async exec(message: Message, {code}: {code: string}): Promise<void|Message> {
        const clean = text => {
            if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else return text;
        }
        try {
        let evaled = await eval(code);
        if (typeof evaled !== "string") evaled = util.inspect(evaled);
        return message.channel.send(clean(evaled), {code:"xl"}).catch((err)=>{message.util.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)});
        } catch (err) {message.util.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)};
    }
}
