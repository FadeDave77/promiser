import { Listener } from 'discord-akairo';
import { Message, MessageEmbed, TextChannel, User, Channel, GuildMember, Guild, GuildChannel } from 'discord.js';
import Discord from 'discord.js';

export default class MessageDeleteListener extends Listener {
    public constructor() {
        super('messageDelete', {
            event: 'messageDelete',
            emitter: 'client',
            category: 'client'
        });
    }



    public async exec(message: Message): Promise<Message> {
        if (message.partial || message.author.bot) return;
        await Discord.Util.delayFor(1000);

        let logs = await message.guild.fetchAuditLogs({type: 72, limit: 6});
        let entry = logs.entries.find(a =>
            new User(this.client, a.target).id === message.author.id && Date.now() - a.createdTimestamp <= 200000
        )
        const executor = entry ? entry.executor : null;
        const executortag = entry ? entry.executor.tag : null;
        const executorid = entry ? entry.executor.id : null;

        const channel: TextChannel = message.guild.channels.cache.find(c=> c.name.toLowerCase() === 'dev-zero') as TextChannel;

        return channel.send(new MessageEmbed()
            .setAuthor(`Message Deleted | Content:`, message.author.displayAvatarURL({dynamic: true}))
            .setDescription(message.content)
            .setColor(0xff0000)
            .addField('Author:', `${message.author} *${message.author.tag}* \`${message.author.id}\``)
            .addField('Channel:', `${message.channel} \`${message.channel.id}\``)
            .addField('Executor:', executor ? `${executor} *${executortag}* \`${executorid}\`` : `Executor unknown.`)
            .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
        );
    }
}
