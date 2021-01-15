import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';
import ms from 'ms';
import { Repository} from 'typeorm';

import { Giveaways } from '../../models/giveaways';
import GiveawayManager from '../../structures/giveawaymanager';

export default class GiveawayCommand extends Command {
    public constructor() {
        super('giveaway', { //name
            aliases: ['giveaway', 'gaway'], //aliases
            category: 'utility', //category of command
            description: {
                content: 'Start a giveaway', //description
                usage: 'giveaway <time> <item>', //how to use
                examples: ['giveaway 5d flush plush'] //exampleArray
            },
            ratelimit: 6, //how many times can you execute / minute
            args: [
                {
                    id: 'time',
                    type: (msg: Message, str: string) => {
                        if (str) return Number(ms(str))
                    },
                    prompt: {
                        start: (msg: Message) => `${msg.author}, you need to provide a time when the giveaway will end!`,
                        retry: (msg: Message) => `${msg.author}, please provide a valid time!`
                    }
                },
                {
                    id: 'item',
                    type: 'string',
                    match: 'rest',
                    prompt: {
                        start: (msg: Message) => `${msg.author}, provide an item to give away!`
                    }
                }
            ]
        });
    }
    public async exec(message: Message, {time, item}: {time: number, item: string}): Promise<any> {
        const giveawayRepo: Repository<Giveaways> = this.client.db.getRepository(Giveaways);
        const end: number = Date.now() + time;
        const msg: Message = await message.channel.send(new MessageEmbed()
            .setAuthor(`Giveaway | ${item}`)
            .setColor(0x00ff00)
            .setDescription(`${message.author} is giving away **${item}**!`)
            .setFooter(`Giveaway will end at ${(new Date(end)).toString().substr(4, 27)}`)
        );
        msg.react('🎉');
        giveawayRepo.insert({
            channel:msg.channel.id,
            message: msg.id,
            time: (Math.round((Date.now()) / 1000)),
            end: Math.round(end / 1000)
        });
        setTimeout(() => {
            GiveawayManager.end(giveawayRepo, msg)
        }, time);
    }
}
