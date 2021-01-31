import { Command } from 'discord-akairo';
import { User } from 'discord.js';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';
import {OwnerId} from '../../config';

export default class UnbanCommand extends Command {
    public constructor() {
        super('unban', { //name
            aliases: ['unban', 'unyeet'], //aliases
            category: 'administration', //category of command
            description: {
                content: 'Remove a previous ban.', //description
                usage: 'unban <user>', //how to use
                examples: ['unban 347822600136949763'] //exampleArray
            },
            userPermissions: ['BAN_MEMBERS'],
            channel: 'guild',
            ratelimit: 6, //how many times can you execute / minute
            args: [
                {
                    id:'user',
                    type:'bigint',
                    prompt: {
                        start: (msg: Message) => `Provide a user to unban, ${msg.author}:`,
                        retry: (msg: Message) => `Provide a valid user to unban, ${msg.author}:`
                    }
                }
            ]
        });
    }
    public async exec(message: Message, user: string): Promise<any> {
        let User = String(user['user'])
        await message.guild.fetchBans().then(async bans=> {
            if(bans.size == 0) return message.util.send('This guild doesn\'t have any bans.')
            else if (bans.find(u=> u.user.id === User)) {message.guild.members.unban(User); return message.channel.send(`${User} unbanned successfully.`)}
            else return message.util.send('No ban with the specified ID exists.');
        });

    };
}
