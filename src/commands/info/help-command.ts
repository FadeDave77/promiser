import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';
import { stripIndents } from 'common-tags';
import { OwnerId } from '../../config';

export default class HelpCommand extends Command {
    public constructor() {
        super('help', { //name
            aliases: ['help', 'halp', 'commands', 'cmds'], //aliases
            category: 'info', //category of command
            description: {
                content: 'View available commands', //description
                usage: 'help (command)', //how to use
                examples: ['help', 'help ping'] //exampleArray
            },
            ratelimit: 6, //how many times can you execute / minute
            args: [
                {
                    id: 'command',
                    type: 'commandAlias',
                    default: null
                }
            ]
        });
    }
    public exec(message: Message, {command}: {command: Command}): Promise<Message> {
        if (command) {
            return message.channel.send(new MessageEmbed()
                .setAuthor(`Help for ${command}`, this.client.user.displayAvatarURL())
                .setColor('RANDOM')
                .setDescription(stripIndents`
                    **Description:**
                    ${command.description.content || '*No description provided.*'}

                    **Aliases:**
                    ${command.aliases.join(', ')}

                    **Category:**
                    ${command.category}

                    **Usage:**
                    ${command.description.usage || '*No usage provided.*'}

                    **Examples:**
                    ${command.description.examples ? command.description.examples.map(p => `\`${p}\``).join('\n') : '*No examples provided*.'}
                `)
            );
        }
        const embed = new MessageEmbed()
            .setAuthor(`Help | ${this.client.user.username}`, this.client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setFooter(`${this.client.commandHandler.prefix}help [command] for more info on a specific command`)
            .setDescription(`\n**An all rounder discord bot written by FadeDave#7005**\n
            \nUse commands in this guild like:\n\`${this.client.commandHandler.prefix} [command] <required arg> (optional arg)\`\n\n**Available commands:**\n`)
            .setThumbnail('https://cdn.discordapp.com/avatars/347822600136949763/996a7e41aa19262bfb82cbbae2821f45.png?size=4096');

        for (const category of this.handler.categories.values()) {
            if (['default'].includes(category.id)) continue;

            embed.addField(`${category.id}`, category
                .filter(cmd => cmd.aliases.length > 0)
                .map(cmd => `\`${cmd}\``)
                .join('  ') || 'No commands in this category.'
                );
        }
        embed.addField('Invite the bot to your own server' , `Remember that this is an administration bot, so you need to give it all the permissions, else it won\'t work correctly.
        [Click me OwO](https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=2147483647&scope=bot)`)
        return message.channel.send(embed);
    }
}
