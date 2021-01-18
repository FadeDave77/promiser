import {Command} from 'discord-akairo';
import {Message, MessageEmbed} from 'discord.js';
import Discord from 'discord.js';

export default class PingCommand extends Command {
    public constructor() {
        super('ping', {
            aliases: ['ping', 'bonk', 'latency', 'ms'],
            category: 'info',
            description: {
                content: "Check the DiscordAPI latency.",
                usage: 'ping',
                examples: ['ping']
            },
            ratelimit: 4
        });
    }
    public async exec(message: Message): Promise<Message> {
        let sstart = Date.now();
        const sent = await message.util.reply('The embed will be here in any moment... just wait a moment... just wait a moment sir!');
        const timeDiff = (Number(sent.editedAt) || Number(sent.createdAt)) - (Number(message.editedAt) || Number(message.createdAt));
        let embed = new MessageEmbed()
        .setTitle('Bonk! :flushed:')
        .setColor('RANDOM')
        let start = Date.now();
        await Discord.Util.delayFor(100);
        let end = Date.now() - start - 100 + 'ms';
        let eend = Date.now() - sstart - 100 + 'ms';
        embed.setDescription(`
        Message return time: **${timeDiff}ms**
        DiscordAPI latency: **${this.client.ws.ping}ms**
        Exec function exec time: **${eend}**
        Simple code exec time: **${end}**
        
        These numbers probably don't mean anything...`)
        return message.util.send(embed);
    }
}
