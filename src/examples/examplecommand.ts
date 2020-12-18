import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';

export default class /*command*/ extends Command {
    public constructor() {
        super('', { //name
            aliases: ['', ''], //aliases
            category: '', //category of command
            description: {
                content: '', //description
                usage: '', //how to use
                examples: [''] //exampleArray
            },
            ratelimit: 6 //how many times can you execute / minute
        });
    }
    public exec(message: Message): Promise<Message> {

        return message.util.send();
    }
}
