import { Command } from 'discord-akairo';
import { Message, GuildMember } from 'discord.js';
import { OwnerId } from '../../config';

export default class MuteCommand extends Command {
    public constructor() {
        super('mute', { // name
            aliases: ['mute'], // aliases
            description: {
                content: 'Mute a member, guild wide.', // description
                usage: 'mute <user> (reason)', // how to use
                examples: ['mute @FadeDave#7005', 'mute 347822600136949763'], // exampleArray
            },
            userPermissions: ['MANAGE_CHANNELS'],
			clientPermissions: ['ADMINISTRATOR'],
            channel: 'guild',
            cooldown: 10000,
            args: [
                {
                    id:'member',
                    type: 'member',
                    prompt: {
                        start: (msg: Message) => `Provide a member to mute, ${msg.author}:`,
                        retry: (msg: Message) => `Provide a valid member to mute, ${msg.author}:`,
                    },
                },
            ],
        });
    }
    public async exec(message: Message, { member }: {member: GuildMember }): Promise<Message> {
        if (member.roles.highest.position >= message.member!.roles.highest.position && message.author.id !== message.guild!.ownerID && message.author.id !== OwnerId) return message.util!.reply('The member you are trying to mute, has higher or equal roles to you!');
        await message.guild!.channels.cache.forEach(c=> c.updateOverwrite(member, { SEND_MESSAGES: false, SPEAK: false }));

        return message.util!.send(`**${member.user.tag}** has been muted by **${message.author.tag}**.`);
    }
}
