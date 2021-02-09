import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment, GuildChannelManager, GuildChannel, Guild} from 'discord.js';
import {OwnerId} from '../../config';

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
            userPermissions: ['MANAGE_CHANNELS'],
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
            if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== (message.guild.ownerID && OwnerId))
            return message.util.reply('The member you are trying to unmute, has higher or equal roles to you!');
        
            if (!message.guild.me.permissions.has("ADMINISTRATOR")) return message.util.send("The bot needs administrator privileges to execute this command.")

            await message.guild.channels.cache.filter(c=> c.type == 'text').forEach(c=> {try{c.permissionOverwrites.get(member.id).delete()} catch{()=> null}});
            await message.guild.channels.cache.filter(c=> c.type == 'news').forEach(c=> {try{c.permissionOverwrites.get(member.id).delete()} catch{()=> null}});
            await message.guild.channels.cache.filter(c=> c.type == 'voice').forEach(c=> {try{c.permissionOverwrites.get(member.id).delete()} catch{()=> null}});
            
            return message.util.send(`**${member.user.tag}** has been unmuted by **${message.author.tag}**.`);
    };
}
