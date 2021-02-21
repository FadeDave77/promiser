import { Command } from 'discord-akairo';
import {Message, GuildMember} from 'discord.js';
import {OwnerId} from '../../config';

export default class UnMuteCommand extends Command {
    public constructor() {
        super('unmute', { //name
            aliases: ['unmute'], //aliases
            description: {
                content: 'Unmute a member, guild wide.', //description
                usage: 'unmute <user>', //how to use
                examples: ['unmute @FadeDave#7005','unmute 347822600136949763'] //exampleArray
            },
            userPermissions: ['MANAGE_CHANNELS'],
            channel: 'guild',
            cooldown: 10000,
            args: [
                {
                    id:'member',
                    type: 'member',
                    prompt: {
                        start: (msg: Message) => `Provide a member to unmute, ${msg.author}:`,
                        retry: (msg: Message) => `Provide a valid member to unmute, ${msg.author}:`
                    }
                }
            ]
        });
    }
    public exec(message: Message, {member}: {member: GuildMember} ): Promise<Message> {
        if (member.roles.highest.position >= message.member!.roles.highest.position && message.author.id !== message.guild!.ownerID && message.author.id !== OwnerId) return message.util!.reply('The member you are trying to unmute, has higher or equal roles to you!');
        
        if (!message.guild!.me!.permissions.has("ADMINISTRATOR")) return message.util!.send("The bot needs administrator privileges to execute this command.")

        message.guild!.channels.cache.filter(c=> c.type == 'text').forEach(c=> c.permissionOverwrites.get(member.id)?.delete());
        message.guild!.channels.cache.filter(c=> c.type == 'news').forEach(c=> c.permissionOverwrites.get(member.id)?.delete());
        message.guild!.channels.cache.filter(c=> c.type == 'voice').forEach(c=> c.permissionOverwrites.get(member.id)?.delete());
            
        return message.util!.send(`**${member.user.tag}** has been unmuted by **${message.author.tag}**.`);
    };
}
