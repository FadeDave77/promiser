import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment, User} from 'discord.js';

export default class CockCommand extends Command {
    public constructor() {
        super('cock', { //name
            aliases: ['cock', 'coq'], //aliases
            category: 'fun', //category of command
            description: {
                content: 'Get the size of cock :flushed:', //description
                usage: 'cock (member)', //how to use
                examples: ['cock', 'cock @FadeDave#7005'] //exampleArray
            },
            ratelimit: 6, //how many times can you execute / minute
            args: [
                {
                    id: 'user',
                    type: 'user',
                    match: 'rest',
                    default: (msg: Message) => msg.author
                }
            ]
        });
    }
    public exec(message: Message, {user}: {user: User} ): Promise<Message> {
        const embed = new MessageEmbed()
        .setTitle(`Oh, i see you got a cock there ${user.username} :eyes:`)
        .setColor('RANDOM')
        .setDescription(`It is **${Math.floor((Math.random()*250))/10}cm** long :hushed:`);

        return message.util.send(embed);
    }
}
