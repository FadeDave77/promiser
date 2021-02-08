import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment, GuildChannelManager, GuildChannel, Guild} from 'discord.js';
import {OwnerId} from '../../config';
import { Mutes } from '../../models/mutes';
import {Repository} from 'typeorm';

export default class MuteCommand extends Command {
    public constructor() {
        super('mute', { //name
            aliases: ['mute'], //aliases
            category: 'moderation', //category of command
            description: {
                content: 'Mute a member, guild wide.', //description
                usage: 'mute <user> (reason)', //how to use
                examples: ['mute @FadeDave#7005','mute 347822600136949763 bruh'] //exampleArray
            },
            userPermissions: ['MANAGE_MESSAGES'],
            channel: 'guild',
            ratelimit: 6, //how many times can you execute / minute
            args: [
                {
                    id:'member',
                    type: 'member',
                    prompt: {
                        start: (msg: Message) => `Provide a member to mute, ${msg.author}:`,
                        retry: (msg: Message) => `Provide a valid member to mute, ${msg.author}:`
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
    public async exec(message: Message, {member, reason}: {member: GuildMember, reason: string} ): Promise<Message> {
        const muteRepo: Repository<Mutes> = this.client.db.getRepository(Mutes);
            if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== (message.guild.ownerID && OwnerId))
            return message.util.reply('The member you are trying to warn, has higher or equal roles to you!');
            
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.util.send("The bot needs administrator privileges to execute this command.")

            await message.guild.channels.cache.filter(c=> c.type == 'text').forEach(c=> c.updateOverwrite(member, {SEND_MESSAGES: false}));
            await message.guild.channels.cache.filter(c=> c.type == 'voice').forEach(c=> c. updateOverwrite(member, {SPEAK: false}));

            await muteRepo.insert({
                guild: message.guild.id,
                user: member.id,
                moderator: message.author.id,
                time: (Math.round((Date.now()) / 1000)),
                reason: reason
            });
            
            return message.util.send(`**${member.user.tag}** has been muted by **${message.author.tag}**, with reason \`${reason}\`.`);
    };
}
