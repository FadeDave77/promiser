import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment} from 'discord.js';

export default class EmbedCommand extends Command {
    public constructor() {
        super('embed', { //name
            aliases: ['embed', 'mkembed'], //aliases
            category: 'utility', //category of command
            description: {
                content: 'Make an embed. (If your option includes spaces, you should put it in quotation marks.', //description
                usage: 'embed (-o) (--options)', //how to use
                examples: ['embed -t Title -c Color -d Description -i Image -T Thumbnail', 'embed -t "My epic title owo" --color 00ffee -d "Woah this is a cool description" --image localhost:///home/fadedave/flushed.png'] //exampleArray
            },
            ratelimit: 6, //how many times can you execute / minute
            args: [
                {
                    id:'title',
                    type: 'string',
                    match: 'option',
                    flag: ['-t', '--title']
                },
                {
                    id:'color',
                    type: 'string',
                    match: 'option',
                    flag: ['-c', '--color']
                },
                {
                    id:'description',
                    type: 'string',
                    match: 'option',
                    flag: ['-d', '--description']
                },
                {
                    id:'image',
                    type: 'url',
                    match: 'option',
                    flag: ['-i', '--image']
                },
                {
                    id:'thumbnail',
                    type: 'url',
                    match: 'option',
                    flag: ['-th', '--thumbnail']
                },
            ]
        });
    }
    public exec(message: Message, {title, color, description, image, thumbnail}: {title: string, color: string, description: string, image: string, thumbnail: string}): Promise<Message> {
        const embed = new MessageEmbed()
            if (title) embed.setTitle(`${title}`)
            if (description) embed.setDescription(`${description}`)
            if (image) embed.setImage(`${image}`)
            if (color) embed.setColor(`${color}`)
            if (thumbnail) embed.setThumbnail(`${thumbnail}`);
        return message.util.send(embed).catch(() => message.util.reply('You made an error in your embed, and it threw an exception. Make sure that your embed is less than 2048 characters, that is a common problem.'));
    }
}
