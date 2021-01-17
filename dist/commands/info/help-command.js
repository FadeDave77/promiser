"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const common_tags_1 = require("common-tags");
const config_1 = require("../../config");
const prefix_1 = require("../../models/prefix");
class HelpCommand extends discord_akairo_1.Command {
    constructor() {
        super('help', {
            aliases: ['help', 'halp', 'commands', 'cmds'],
            category: 'info',
            description: {
                content: 'View available commands',
                usage: 'help (command)',
                examples: ['help', 'help ping'] //exampleArray
            },
            ratelimit: 6,
            args: [
                {
                    id: 'command',
                    type: 'commandAlias',
                    default: null
                }
            ]
        });
    }
    async exec(message, { command }) {
        const newPrefix = await this.client.db.getRepository(prefix_1.Prefix).findOne({ guild: message.guild.id }).then(e => { return e.value; }).catch(() => null);
        if (command) {
            return message.channel.send(new discord_js_1.MessageEmbed()
                .setAuthor(`Help for ${command}`, this.client.user.displayAvatarURL())
                .setColor('RANDOM')
                .setDescription(common_tags_1.stripIndents `
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
                `));
        }
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`Help | ${this.client.user.username}`, this.client.user.displayAvatarURL())
            .setColor('RANDOM')
            .setFooter(`${newPrefix ? newPrefix : config_1.Prefix}help [command] for more info on a specific command`)
            .setDescription(`\n**An all rounder discord bot written by FadeDave#7005**\nVersion: 0.5.3\n
            \nUse commands in this guild like:\n\`${newPrefix ? newPrefix : config_1.Prefix} [command] <required arg> (optional arg)\`\n\n**Available commands:**\n`)
            .setThumbnail('https://cdn.discordapp.com/avatars/347822600136949763/996a7e41aa19262bfb82cbbae2821f45.png?size=4096');
        for (const category of this.handler.categories.values()) {
            if (['default'].includes(category.id))
                continue;
            embed.addField(`${category.id}`, category
                .filter(cmd => cmd.aliases.length > 0)
                .map(cmd => `\`${cmd}\``)
                .join('  ') || 'No commands in this category.');
        }
        embed.addField('Invite the bot to your own server', `Remember that this is an administration bot, so you need to give it all the permissions, else it won\'t work correctly.
        [Click me OwO](https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=2147483647&scope=bot)`);
        return message.channel.send(embed);
    }
}
exports.default = HelpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2luZm8vaGVscC1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBQ3pDLDJDQUFtRDtBQUNuRCw2Q0FBMkM7QUFDM0MseUNBQWdFO0FBQ2hFLGdEQUE2QztBQUc3QyxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDNUM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQzdDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsY0FBYzthQUNqRDtZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFO2dCQUNGO29CQUNJLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxjQUFjO29CQUNwQixPQUFPLEVBQUUsSUFBSTtpQkFDaEI7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBQyxPQUFPLEVBQXFCO1FBQzdELE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGVBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxFQUFFLEdBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNJLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFZLEVBQUU7aUJBQ3pDLFNBQVMsQ0FBQyxZQUFZLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7aUJBQ3JFLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLGNBQWMsQ0FBQywwQkFBWSxDQUFBOztzQkFFdEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksNEJBQTRCOzs7c0JBRzNELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7O3NCQUcxQixPQUFPLENBQUMsUUFBUTs7O3NCQUdoQixPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxzQkFBc0I7OztzQkFHbkQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUF5QjtpQkFDNUgsQ0FBQyxDQUNMLENBQUM7U0FDTDtRQUNELE1BQU0sS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUMzQixTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3JGLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFDbEIsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWEsb0RBQW9ELENBQUM7YUFDdkcsY0FBYyxDQUFDO29EQUN3QixTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBYSx5RUFBeUUsQ0FBQzthQUN0SixZQUFZLENBQUMsc0dBQXNHLENBQUMsQ0FBQztRQUUxSCxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFBRSxTQUFTO1lBRWhELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsUUFBUTtpQkFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUNyQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQStCLENBQzdDLENBQUM7U0FDVDtRQUNELEtBQUssQ0FBQyxRQUFRLENBQUMsbUNBQW1DLEVBQUc7d0VBQ1csSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFBO1FBQ3hILE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNKO0FBakVELDhCQWlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlRW1iZWQgfSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB7IHN0cmlwSW5kZW50cyB9IGZyb20gJ2NvbW1vbi10YWdzJztcbmltcG9ydCB7IE93bmVySWQsIFByZWZpeCBhcyBkZWZhdWx0UHJlZml4IH0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IFByZWZpeCB9IGZyb20gJy4uLy4uL21vZGVscy9wcmVmaXgnO1xuaW1wb3J0IHtSZXBvc2l0b3J5IH0gZnJvbSAndHlwZW9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignaGVscCcsIHsgLy9uYW1lXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ2hlbHAnLCAnaGFscCcsICdjb21tYW5kcycsICdjbWRzJ10sIC8vYWxpYXNlc1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdpbmZvJywgLy9jYXRlZ29yeSBvZiBjb21tYW5kXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdWaWV3IGF2YWlsYWJsZSBjb21tYW5kcycsIC8vZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB1c2FnZTogJ2hlbHAgKGNvbW1hbmQpJywgLy9ob3cgdG8gdXNlXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFsnaGVscCcsICdoZWxwIHBpbmcnXSAvL2V4YW1wbGVBcnJheVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhdGVsaW1pdDogNiwgLy9ob3cgbWFueSB0aW1lcyBjYW4geW91IGV4ZWN1dGUgLyBtaW51dGVcbiAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnY29tbWFuZCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb21tYW5kQWxpYXMnLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwge2NvbW1hbmR9OiB7Y29tbWFuZDogQ29tbWFuZH0pOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbmV3UHJlZml4ID0gYXdhaXQgdGhpcy5jbGllbnQuZGIuZ2V0UmVwb3NpdG9yeShQcmVmaXgpLmZpbmRPbmUoe2d1aWxkOiBtZXNzYWdlLmd1aWxkLmlkfSkudGhlbihlPT4ge3JldHVybiBlLnZhbHVlfSkuY2F0Y2goKCk9PiBudWxsKVxuICAgICAgICBpZiAoY29tbWFuZCkge1xuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKG5ldyBNZXNzYWdlRW1iZWQoKVxuICAgICAgICAgICAgICAgIC5zZXRBdXRob3IoYEhlbHAgZm9yICR7Y29tbWFuZH1gLCB0aGlzLmNsaWVudC51c2VyLmRpc3BsYXlBdmF0YXJVUkwoKSlcbiAgICAgICAgICAgICAgICAuc2V0Q29sb3IoJ1JBTkRPTScpXG4gICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKHN0cmlwSW5kZW50c2BcbiAgICAgICAgICAgICAgICAgICAgKipEZXNjcmlwdGlvbjoqKlxuICAgICAgICAgICAgICAgICAgICAke2NvbW1hbmQuZGVzY3JpcHRpb24uY29udGVudCB8fCAnKk5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkLionfVxuXG4gICAgICAgICAgICAgICAgICAgICoqQWxpYXNlczoqKlxuICAgICAgICAgICAgICAgICAgICAke2NvbW1hbmQuYWxpYXNlcy5qb2luKCcsICcpfVxuXG4gICAgICAgICAgICAgICAgICAgICoqQ2F0ZWdvcnk6KipcbiAgICAgICAgICAgICAgICAgICAgJHtjb21tYW5kLmNhdGVnb3J5fVxuXG4gICAgICAgICAgICAgICAgICAgICoqVXNhZ2U6KipcbiAgICAgICAgICAgICAgICAgICAgJHtjb21tYW5kLmRlc2NyaXB0aW9uLnVzYWdlIHx8ICcqTm8gdXNhZ2UgcHJvdmlkZWQuKid9XG5cbiAgICAgICAgICAgICAgICAgICAgKipFeGFtcGxlczoqKlxuICAgICAgICAgICAgICAgICAgICAke2NvbW1hbmQuZGVzY3JpcHRpb24uZXhhbXBsZXMgPyBjb21tYW5kLmRlc2NyaXB0aW9uLmV4YW1wbGVzLm1hcChwID0+IGBcXGAke3B9XFxgYCkuam9pbignXFxuJykgOiAnKk5vIGV4YW1wbGVzIHByb3ZpZGVkKi4nfVxuICAgICAgICAgICAgICAgIGApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXG4gICAgICAgICAgICAuc2V0QXV0aG9yKGBIZWxwIHwgJHt0aGlzLmNsaWVudC51c2VyLnVzZXJuYW1lfWAsIHRoaXMuY2xpZW50LnVzZXIuZGlzcGxheUF2YXRhclVSTCgpKVxuICAgICAgICAgICAgLnNldENvbG9yKCdSQU5ET00nKVxuICAgICAgICAgICAgLnNldEZvb3RlcihgJHtuZXdQcmVmaXggPyBuZXdQcmVmaXggOiBkZWZhdWx0UHJlZml4fWhlbHAgW2NvbW1hbmRdIGZvciBtb3JlIGluZm8gb24gYSBzcGVjaWZpYyBjb21tYW5kYClcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgXFxuKipBbiBhbGwgcm91bmRlciBkaXNjb3JkIGJvdCB3cml0dGVuIGJ5IEZhZGVEYXZlIzcwMDUqKlxcblZlcnNpb246IDAuNS4zXFxuXG4gICAgICAgICAgICBcXG5Vc2UgY29tbWFuZHMgaW4gdGhpcyBndWlsZCBsaWtlOlxcblxcYCR7bmV3UHJlZml4ID8gbmV3UHJlZml4IDogZGVmYXVsdFByZWZpeH0gW2NvbW1hbmRdIDxyZXF1aXJlZCBhcmc+IChvcHRpb25hbCBhcmcpXFxgXFxuXFxuKipBdmFpbGFibGUgY29tbWFuZHM6KipcXG5gKVxuICAgICAgICAgICAgLnNldFRodW1ibmFpbCgnaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXZhdGFycy8zNDc4MjI2MDAxMzY5NDk3NjMvOTk2YTdlNDFhYTE5MjYyYmZiODJjYmJhZTI4MjFmNDUucG5nP3NpemU9NDA5NicpO1xuXG4gICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgdGhpcy5oYW5kbGVyLmNhdGVnb3JpZXMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChbJ2RlZmF1bHQnXS5pbmNsdWRlcyhjYXRlZ29yeS5pZCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBlbWJlZC5hZGRGaWVsZChgJHtjYXRlZ29yeS5pZH1gLCBjYXRlZ29yeVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoY21kID0+IGNtZC5hbGlhc2VzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgLm1hcChjbWQgPT4gYFxcYCR7Y21kfVxcYGApXG4gICAgICAgICAgICAgICAgLmpvaW4oJyAgJykgfHwgJ05vIGNvbW1hbmRzIGluIHRoaXMgY2F0ZWdvcnkuJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZW1iZWQuYWRkRmllbGQoJ0ludml0ZSB0aGUgYm90IHRvIHlvdXIgb3duIHNlcnZlcicgLCBgUmVtZW1iZXIgdGhhdCB0aGlzIGlzIGFuIGFkbWluaXN0cmF0aW9uIGJvdCwgc28geW91IG5lZWQgdG8gZ2l2ZSBpdCBhbGwgdGhlIHBlcm1pc3Npb25zLCBlbHNlIGl0IHdvblxcJ3Qgd29yayBjb3JyZWN0bHkuXG4gICAgICAgIFtDbGljayBtZSBPd09dKGh0dHBzOi8vZGlzY29yZC5jb20vb2F1dGgyL2F1dGhvcml6ZT9jbGllbnRfaWQ9JHt0aGlzLmNsaWVudC51c2VyLmlkfSZwZXJtaXNzaW9ucz0yMTQ3NDgzNjQ3JnNjb3BlPWJvdClgKVxuICAgICAgICByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoZW1iZWQpO1xuICAgIH1cbn1cbiJdfQ==