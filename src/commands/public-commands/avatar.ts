import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';

export default class AvatarCommand extends Command {
    public constructor() {
        super('avatar', { //name
            aliases: ['avatar', 'pfp'], //aliases
            category: 'public-commands', //category of command
            description: {
                content: 'Get a user\'s avatar', //description
                usage: 'avatar tag/id', //how to use
                examples: ['avatar @FadeDave#7005', 'pfp 347822600136949763'] //exampleArray
            },
            ratelimit: 6, //how many times can you execute / minute
            args: [
                {
                    id: 'member',
                    type: 'member',
                    match: 'rest',
                    default: (msg: Message) => msg.member
                },
                {
                    id: 'size',
                    type: (_: Message, str: string): null | Number => {
                        if (str && !isNaN(Number(str)) && [16, 32, 64, 128, 256, 512, 1024, 2048].includes(Number(str))) return Number(str);
                        return null;
                    },
                    match: 'option',
                    flag: ['-s', '--size'],
                    default: 2048
                }
            ]
        });
    }
    public exec(message: Message, {member, size}: {member: GuildMember, size: number}): Promise<Message> {
        return message.util.send(new MessageEmbed()
            .setTitle(`Avatar for ${member.user.tag}`)
            .setColor('RANDOM')
            .setImage(member.user.displayAvatarURL({size: size as ImageSize}))
        );
    }
}
