import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';
import {Repository} from 'typeorm';
import { OwnerId } from '../../config';

import { Prefix } from '../../models/prefix';

export default class PrefixCommand extends Command {
    public constructor() {
        super('prefix', { //name
            aliases: ['prefix'], //aliases
            category: 'administration', //category of command
            description: {
                content: 'Change the prefix of the bot on the server.', //description
                usage: 'prefix <newprefix>', //how to use
                examples: ['prefix !'] //exampleArray
            },
            ratelimit: 3, //how many times can you execute / minute
            channel: 'guild',
            userPermissions: ['ADMINISTRATOR'],
            args: [
                {
                    id: 'prefix',
                    type: 'string',
                    prompt: {
                        start: (msg: Message) => `Provide a new prefix, ${msg.author}:`,
                        retry: (msg: Message) => `Provide a new valid prefix, ${msg.author}:`
                    }
                }
            ]
        });
    }
    public async exec(message: Message, {prefix}: { prefix : string }): Promise<Message> {
        const prefixRepo: Repository<Prefix> = this.client.db.getRepository(Prefix);
        prefixRepo.delete({guild: message.guild.id}).catch(()=> null);
        await prefixRepo.insert({
            guild: message.guild.id,
            value: prefix
        });
        return message.util.send(`Changed prefix to "${prefix}".`);
    };
};
