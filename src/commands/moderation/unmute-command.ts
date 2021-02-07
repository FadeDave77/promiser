import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment, GuildChannelManager, GuildChannel, Guild} from 'discord.js';
import {OwnerId} from '../../config';
import { Mutes } from '../../models/mutes';
import {Repository} from 'typeorm';
import { ChannelManager } from 'discord.js';

export default class UnMuteCommand extends Command {
    public constructor() {
        super('unmute', { //name
            aliases: ['unmute'], //aliases
            category: 'moderation', //category of command
            description: {
                content: 'Unmute a member, guild wide.', //description
                usage: 'unmute <user>', //how to use
                examples: ['unmute @FadeDave#7005','unmute 347822600136949763'] //exampleArray
            },
            userPermissions: ['MANAGE_MESSAGES'],
            channel: 'guild',
            ratelimit: 6, //how many times can you execute / minute
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
    public async exec(message: Message, {member}: {member: GuildMember} ): Promise<Message> {
        const muteRepo: Repository<Mutes> = this.client.db.getRepository(Mutes);
            if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== (message.guild.ownerID && OwnerId))
                return message.util.reply('The member you are trying to warn, has higher or equal roles to you!');
        
            message.guild.channels.cache.filter(c=> c.type == 'text').forEach(c=> c.permissionOverwrites.get(member.id).delete());
            message.guild.channels.cache.filter(c=> c.type == 'voice').forEach(c=> c.permissionOverwrites.get(member.id).delete());
            
            return message.util.send(`**${member.user.tag}** has been unmuted by **${message.author.tag}**.`);
    };
}
