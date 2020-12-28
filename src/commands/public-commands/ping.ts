import {Command} from 'discord-akairo';
import {Message, MessageEmbed} from 'discord.js';

export default class PingCommand extends Command {
    public constructor() {
        super('ping', {
            aliases: ['ping', 'bonk', 'latency', 'ms'],
            category: 'public-commands',
            description: {
                content: "Check the DiscordAPI latency.",
                usage: 'ping',
                examples: ['ping']
            },
            ratelimit: 4
        });
    }
    public exec(message: Message): Promise<Message> {
        return message.util.send(new MessageEmbed()
        .setTitle('Bonk!')
        .setColor('RANDOM')
        .setDescription(`DiscordAPI latency: \n **${this.client.ws.ping}ms**`)
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/53/flushed-face_1f633.png')
        );
    }
}
