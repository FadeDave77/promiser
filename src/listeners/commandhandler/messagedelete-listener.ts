import { Listener } from 'discord-akairo';
import { Message, MessageEmbed, TextChannel, GuildAuditLogsEntry, User } from 'discord.js';
import Discord from 'discord.js';

export default class MessageDeleteListener extends Listener {
	public constructor() {
		super('messageDelete', {
			event: 'messageDelete',
			emitter: 'client',
		});
	}
	public async exec(message: Message): Promise<Message | undefined> {
		if (message.partial || message.author.bot) return;
		await Discord.Util.delayFor(1000);

		const logs = await message.guild?.fetchAuditLogs({ type: 72, limit: 6 });
		if (!logs) return;
		const entry = logs.entries.find(
			(a: GuildAuditLogsEntry) => (a.target as User).id == message.author.id && (a.extra as Message).channel.id === message.channel.id && Date.now() - a.createdTimestamp < 200000,
		);
		console.log(entry);
		const executor = entry ? entry.executor : null;
		const executortag = entry ? entry.executor.tag : null;
		const executorid = entry ? entry.executor.id : null;

		const channel: TextChannel | undefined = message.guild?.channels.cache.find((c) => c.name.toLowerCase() === 'bot-log') as TextChannel;
		if (!channel) return;
		const attachments = message.attachments?.map((e) => e.proxyURL);
		const embed = new MessageEmbed().setAuthor('Message Deleted | Content:', message.author.displayAvatarURL({ dynamic: true })).setDescription(message.content);
		attachments[0] ? embed.setImage(attachments[0]) : null;
		attachments[1] ? embed.setThumbnail(attachments[1]) : null;
		embed
			.setColor(0xff0000)
			.addField('Author:', `${message.author} *${message.author.tag}* \`${message.author.id}\``)
			.addField('Channel:', `${message.channel} \`${message.channel.id}\``);
		if (executor) {
			embed
				.addField('Executor:', `${executor} *${executortag}* \`${executorid}\``)
				.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
				.setFooter(new Date().toString().substr(4, 27));
		}
		return channel.send(embed);
	}
}
