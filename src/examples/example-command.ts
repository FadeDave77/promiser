import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';

export default class /*command*/ extends Command {
    public constructor() {
        super('', {
            aliases: ['', ''],
            description: {
                content: '',
                usage: '',
                examples: ['']
            }
        });
    }
    public exec(message: Message): Promise<Message> {

        return message.util.send();
    }
}
