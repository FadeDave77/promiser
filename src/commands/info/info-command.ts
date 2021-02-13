import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';
import {Prefix as defaultPrefix, OwnerAvatar, OwnerId} from '../../config';
import { Prefix } from '../../models/prefix';

export default class InfoCommand extends Command {
    public constructor() {
        super('info', { //name
            aliases: ['info'], //aliases
            category: 'info', //category of command
            description: {
                content: 'Verbose info on the bot & client.', //description
                usage: 'info', //how to use
                examples: ['info'] //exampleArray
            },
            ratelimit: 6 //how many times can you execute / minute
        });
    }
    public async exec(message: Message): Promise<Message> {
        const embed = new MessageEmbed()
        .setAuthor('Info', this.client.user.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(`
        Creator: **FadeDave#7005(${OwnerId})**
        Version: **0.6.2**


        Shards: **${this.client.ws.shards.size}**
        `)
        .setThumbnail(OwnerAvatar)
        return message.util.send(embed);
    }
}
