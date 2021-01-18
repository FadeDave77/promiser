import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';
import {OwnerId} from '../../config';

export default class GuildsCommand extends Command {
    public constructor() {
        super('guilds', { //name
            aliases: ['guilds', 'servers'], //aliases
            category: 'owner', //category of command
            description: {
                content: 'Get the all joined guilds..', //description
                usage: 'guilds', //how to use
                examples: ['servers'] //exampleArray
            },
            ratelimit: 6, //how many times can you execute / minute
            ownerOnly: true
        });
    }
    public async exec(message: Message): Promise<Message> {
        message.util.send('### START SERVER ECHO ###')
        await this.client.guilds.cache.forEach(guild => {
        message.util.send(`${guild.name} | ${guild.id}`)
        })
        return message.util.send('### END SERVER ECHO ###');
    }
}
