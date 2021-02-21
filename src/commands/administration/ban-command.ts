import { Command } from 'discord-akairo';
import {Message, GuildMember} from 'discord.js';
import {OwnerId} from '../../config';

export default class BanCommand extends Command {
    public constructor() {
        super('ban', { //name
            aliases: ['ban', 'yeet'], //aliases
            description: {
                content: 'Ban a member from the guild.', //description
                usage: 'ban <user> (reason) --days (delete messages going back x days)', //how to use
                examples: ['ban @FadeDave#7005 too hot','ban 347822600136949763 not cool bro -d 7'] //exampleArray
            },
            userPermissions: ['BAN_MEMBERS'],
            channel: 'guild',
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
                    id:'days',
                    type:'number',
                    default: 0,
                    match: 'option',
                    flag: ['-d', '--days']
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
    public exec(message: Message, {member, reason, days}: { member: GuildMember, reason : string, days: number }): Promise<Message> {
        if (days > 7) days = 7
        if (member.roles.highest.position >= message.member!.roles.highest.position && message.author.id !== message.guild!.ownerID && message.author.id !== OwnerId) return message.util!.reply('The member you are trying to ban, has higher or equal roles to you!');
        else if (member.bannable) {
            member.ban({reason: 'Reason: ' + reason + ', Executor: ' + message.author.tag, days: days}).catch(() => null);
            return message.util!.send(`User "${member}" has been banned, with reason "${reason}".`);
        }
        else {
            return message.util!.reply('That member is not bannable. The bot is missing permissions, or the member is a server owner.');
        }
    };
}
