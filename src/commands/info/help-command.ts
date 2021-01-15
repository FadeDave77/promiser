import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';
import { stripIndents } from 'common-tags';

export default class HelpCommand extends Command {
    public constructor() {
        super('help', { //name
            aliases: ['help', 'halp', 'commands', 'cmds'], //aliases
            category: 'info', //category of command
            description: {
                content: 'View available commands', //description
                usage: 'help <command>', //how to use
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
                .setAuthor(`Help | ${command}`, this.client.user.displayAvatarURL())
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
            .setDescription(`**Current guild prefix is:**\n\`${this.client.commandHandler.prefix}\`\n\n**Available command categories & commands:**\n`);

        for (const category of this.handler.categories.values()) {
            if (['default'].includes(category.id)) continue;

            embed.addField(`*${category.id}*`, category
                .filter(cmd => cmd.aliases.length > 0)
                .map(cmd => `\`${cmd}\``)
                .join(', ') || 'No commands in this category.'
                );
        }
        return message.channel.send(embed);
    }
}
