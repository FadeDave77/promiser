import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';

export default class UserCommand extends Command {
    public constructor() {
        super('user', { //name
            aliases: ['user', 'member'], //aliases
            category: 'stats', //category of command
            description: {
                content: 'Get the stats of a user.', //description
                usage: 'user (user)', //how to use
                examples: ['user', 'user @FadeDave#7005'] //exampleArray
            },
            ratelimit: 6, //how many times can you execute / minute
            channel: 'guild',
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
    public exec(message: Message, {member}: {member:GuildMember}): Promise<Message> {
        const embed = new MessageEmbed()
        .setTitle(`Userinfo for \`${member.user.tag}\``)
        .setColor("RANDOM")
        .setDescription(`
        **Created at:** ${member.user.createdAt.toString().substr(4, 27)}\n
        **UserID:** ${member.user.id}\n
        **IsBot:** ${member.user.bot}\n
        **Status:** ${member.user.presence.status}

        **Avatar:**`)
        .setImage(member.user.avatarURL());
        return message.util.send(embed);
    }
}
