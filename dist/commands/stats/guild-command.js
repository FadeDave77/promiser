"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class GuildCommand extends discord_akairo_1.Command {
    constructor() {
        super('guild', {
            aliases: ['guild', 'server'],
            category: 'stats',
            description: {
                content: 'Get the stats of the guild.',
                usage: 'guild',
                examples: ['guild'] //exampleArray
            },
            ratelimit: 6,
            channel: 'guild',
        });
    }
    exec(message) {
        let guild = message.guild;
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`Guildinfo for \`${guild.name}\``)
            .setColor("RANDOM")
            .setDescription(`
        **Created at:** ${guild.createdAt.toString().substr(4, 27)}\n
        **GuildID:** ${guild.id}\n
        **Description:** ${guild.description ? guild.description : 'Guild has no description.'}\n
        **Emojis:** ${guild.emojis.cache.map(emoji => emoji.toString()).join(' | ')}

        **Icon:**`)
            .setImage(guild.iconURL());
        return message.util.send(embed);
    }
}
exports.default = GuildCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGQtY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9zdGF0cy9ndWlsZC1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBRXpDLDJDQUF5RztBQUV6RyxNQUFxQixZQUFhLFNBQVEsd0JBQU87SUFDN0M7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUM1QixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLDZCQUE2QjtnQkFDdEMsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYzthQUNyQztZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUFnQjtRQUN4QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUkseUJBQVksRUFBRTthQUMvQixRQUFRLENBQUMsbUJBQW1CLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQzthQUMzQyxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ2xCLGNBQWMsQ0FBQzswQkFDRSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO3VCQUMzQyxLQUFLLENBQUMsRUFBRTsyQkFDSixLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7c0JBQ3hFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O2tCQUVqRSxDQUFDO2FBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKO0FBN0JELCtCQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XG5pbXBvcnQgeyBHdWlsZEVtb2ppIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQge01lc3NhZ2UsIEd1aWxkTWVtYmVyLCBNZXNzYWdlRW1iZWQsIEltYWdlU2l6ZSwgVGV4dENoYW5uZWwsIE1lc3NhZ2VBdHRhY2htZW50fSBmcm9tICdkaXNjb3JkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpbGRDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZ3VpbGQnLCB7IC8vbmFtZVxuICAgICAgICAgICAgYWxpYXNlczogWydndWlsZCcsICdzZXJ2ZXInXSwgLy9hbGlhc2VzXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3N0YXRzJywgLy9jYXRlZ29yeSBvZiBjb21tYW5kXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdHZXQgdGhlIHN0YXRzIG9mIHRoZSBndWlsZC4nLCAvL2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgdXNhZ2U6ICdndWlsZCcsIC8vaG93IHRvIHVzZVxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbJ2d1aWxkJ10gLy9leGFtcGxlQXJyYXlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYXRlbGltaXQ6IDYsIC8vaG93IG1hbnkgdGltZXMgY2FuIHlvdSBleGVjdXRlIC8gbWludXRlXG4gICAgICAgICAgICBjaGFubmVsOiAnZ3VpbGQnLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgICAgICBsZXQgZ3VpbGQgPSBtZXNzYWdlLmd1aWxkO1xuICAgICAgICBjb25zdCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxuICAgICAgICAuc2V0VGl0bGUoYEd1aWxkaW5mbyBmb3IgXFxgJHtndWlsZC5uYW1lfVxcYGApXG4gICAgICAgIC5zZXRDb2xvcihcIlJBTkRPTVwiKVxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oYFxuICAgICAgICAqKkNyZWF0ZWQgYXQ6KiogJHtndWlsZC5jcmVhdGVkQXQudG9TdHJpbmcoKS5zdWJzdHIoNCwgMjcpfVxcblxuICAgICAgICAqKkd1aWxkSUQ6KiogJHtndWlsZC5pZH1cXG5cbiAgICAgICAgKipEZXNjcmlwdGlvbjoqKiAke2d1aWxkLmRlc2NyaXB0aW9uID8gZ3VpbGQuZGVzY3JpcHRpb24gOiAnR3VpbGQgaGFzIG5vIGRlc2NyaXB0aW9uLid9XFxuXG4gICAgICAgICoqRW1vamlzOioqICR7Z3VpbGQuZW1vamlzLmNhY2hlLm1hcChlbW9qaSA9PiBlbW9qaS50b1N0cmluZygpKS5qb2luKCcgfCAnKX1cblxuICAgICAgICAqKkljb246KipgKVxuICAgICAgICAuc2V0SW1hZ2UoZ3VpbGQuaWNvblVSTCgpKTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGVtYmVkKTtcbiAgICB9XG59XG4iXX0=