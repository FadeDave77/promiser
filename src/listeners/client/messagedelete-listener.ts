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

        const channel: TextChannel = message.guild.channels.cache.find(c=> c.name.toLowerCase() === 'promiser-beta') as TextChannel;

        let embed = new MessageEmbed()
            .setAuthor(`Message Deleted | Content:`, message.author.displayAvatarURL({dynamic: true}))
            .setDescription(message.content)
            .setColor(0xff0000)
            .addField('Author:', `${message.author} *${message.author.tag}* \`${message.author.id}\``)
            .addField('Channel:', `${message.channel} \`${message.channel.id}\``)
            if (executor) embed.addField('Executor:', `${executor} *${executortag}* \`${executorid}\``)
            .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
            .setFooter(new Date().toString().substr(4, 27))
        return channel ? channel.send(embed).catch(()=> null) : null;
    }
}
