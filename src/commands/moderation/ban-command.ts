import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';
import {OwnerId} from '../../config';

export default class Ban extends Command {
    public constructor() {
        super('ban', { //name
            aliases: ['ban', 'yeet'], //aliases
            category: 'moderation', //category of command
            description: {
                content: 'Ban a member from the guild.', //description
                usage: 'ban <user> <reason>', //how to use
                examples: ['ban @FadeDave#7005 too hot\n ban 347822600136949763 not cool bro'] //exampleArray
            },
            userPermissions: ['BAN_MEMBERS'],
            ratelimit: 6, //how many times can you execute / minute
            args: [
                {
                    id:'member',
                    type: 'member',
                    prompt: {
                        start: (msg: Message) => `Provide a member to ban, ${msg.author}:`,
                        retry: (msg: Message) => `Provide a valid member to ban, ${msg.author}:`
                    }
                },
                {
                    id: 'reason',
                    type: 'string',
                    match: 'rest',
                    default: 'None'
                }
            ]
        });
    }
    public exec(message: Message, {member, reason}: { member: GuildMember, reason : string }): Promise<Message> {
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== (message.guild.ownerID && OwnerId))
            return message.util.reply('The member you are trying to ban, has higher or equal roles to you!');
        else if (member.bannable) {
            member.ban({reason: reason}).catch(() => null);
            return message.util.send(`User "${member}" has been banned, with reason "${reason}".`);
        }
        else {
            return message.util.reply('That member is not bannable. The bot is missing permissions, or the member is a server owner.');
        }
    };
}
