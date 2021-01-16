import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';

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
                    id: 'member',
                    type: 'member',
                    match: 'rest',
                    default: (msg: Message) => msg.member
                }
            ]
        });
    }
    public exec(message: Message, {member}: {member: GuildMember} ): Promise<Message> {
        const embed = new MessageEmbed()
        .setTitle(`Oh, i see you got a cock there ${member.user.username} :eyes:`)
        .setColor('RANDOM')
        .setDescription(`It is **${Math.floor((Math.random()*250))/10}cm** long :hushed:`);

        return message.util.send(embed);
    }
}
