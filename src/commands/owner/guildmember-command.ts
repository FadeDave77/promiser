import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';
import {OwnerId} from '../../config';

export default class GuildMemberCommand extends Command {
    public constructor() {
        super('members', { //name
            aliases: ['members', 'guildmembers'], //aliases
            category: 'owner', //category of command
            description: {
                content: 'Get the all members of the guild.', //description
                usage: 'members', //how to use
                examples: ['guildmembers'] //exampleArray
            },
            ratelimit: 6 //how many times can you execute / minute
        });
    }
    public async exec(message: Message): Promise<Message> {
        if (message.author.id !== (OwnerId && message.guild.ownerID)) return message.util.send('You are not a bot or server owner, you don\'t have permission to use this command.');
        message.util.send('### START MEMBER ECHO ###')
        await message.guild.members.cache.forEach(member => {
        message.util.send(`${member.user.tag} | ${member.id}`)
        })
        return message.util.send('### END MEMBER ECHO ###');
    }
}
