"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class UserCommand extends discord_akairo_1.Command {
    constructor() {
        super('user', {
            aliases: ['user', 'member'],
            category: 'stats',
            description: {
                content: 'Get the stats of a user.',
                usage: 'user (user)',
                examples: ['user', 'user @FadeDave#7005'] //exampleArray
            },
            ratelimit: 6,
            channel: 'guild',
            args: [
                {
                    id: 'member',
                    type: 'member',
                    match: 'rest',
                    default: (msg) => msg.member
                }
            ]
        });
    }
    exec(message, { member }) {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`Userinfo for \`${member.user.tag}\``)
            .setColor("RANDOM")
            .setDescription(`
        **Created at:** ${member.user.createdAt.toString().substr(4, 27)}\n
        **UserID:** ${member.user.id}\n
        **IsBot:** ${member.user.bot}\n
        **Status:** ${member.user.presence.status}

        **Avatar:**`)
            .setImage(member.user.avatarURL());
        return message.util.send(embed);
    }
}
exports.default = UserCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3N0YXRzL3VzZXItY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUN6QywyQ0FBeUc7QUFFekcsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFDM0IsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSwwQkFBMEI7Z0JBQ25DLEtBQUssRUFBRSxhQUFhO2dCQUNwQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxjQUFjO2FBQzNEO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsT0FBTyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtpQkFDeEM7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFDLE1BQU0sRUFBdUI7UUFDeEQsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQy9CLFFBQVEsQ0FBQyxrQkFBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUMvQyxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ2xCLGNBQWMsQ0FBQzswQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztzQkFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO3FCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztzQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNOztvQkFFN0IsQ0FBQzthQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDbkMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0o7QUFwQ0QsOEJBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7TWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCwgSW1hZ2VTaXplLCBUZXh0Q2hhbm5lbCwgTWVzc2FnZUF0dGFjaG1lbnR9IGZyb20gJ2Rpc2NvcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3VzZXInLCB7IC8vbmFtZVxuICAgICAgICAgICAgYWxpYXNlczogWyd1c2VyJywgJ21lbWJlciddLCAvL2FsaWFzZXNcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnc3RhdHMnLCAvL2NhdGVnb3J5IG9mIGNvbW1hbmRcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ0dldCB0aGUgc3RhdHMgb2YgYSB1c2VyLicsIC8vZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB1c2FnZTogJ3VzZXIgKHVzZXIpJywgLy9ob3cgdG8gdXNlXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFsndXNlcicsICd1c2VyIEBGYWRlRGF2ZSM3MDA1J10gLy9leGFtcGxlQXJyYXlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYXRlbGltaXQ6IDYsIC8vaG93IG1hbnkgdGltZXMgY2FuIHlvdSBleGVjdXRlIC8gbWludXRlXG4gICAgICAgICAgICBjaGFubmVsOiAnZ3VpbGQnLFxuICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdtZW1iZXInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6ICdyZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogKG1zZzogTWVzc2FnZSkgPT4gbXNnLm1lbWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UsIHttZW1iZXJ9OiB7bWVtYmVyOkd1aWxkTWVtYmVyfSk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBlbWJlZCA9IG5ldyBNZXNzYWdlRW1iZWQoKVxuICAgICAgICAuc2V0VGl0bGUoYFVzZXJpbmZvIGZvciBcXGAke21lbWJlci51c2VyLnRhZ31cXGBgKVxuICAgICAgICAuc2V0Q29sb3IoXCJSQU5ET01cIilcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKGBcbiAgICAgICAgKipDcmVhdGVkIGF0OioqICR7bWVtYmVyLnVzZXIuY3JlYXRlZEF0LnRvU3RyaW5nKCkuc3Vic3RyKDQsIDI3KX1cXG5cbiAgICAgICAgKipVc2VySUQ6KiogJHttZW1iZXIudXNlci5pZH1cXG5cbiAgICAgICAgKipJc0JvdDoqKiAke21lbWJlci51c2VyLmJvdH1cXG5cbiAgICAgICAgKipTdGF0dXM6KiogJHttZW1iZXIudXNlci5wcmVzZW5jZS5zdGF0dXN9XG5cbiAgICAgICAgKipBdmF0YXI6KipgKVxuICAgICAgICAuc2V0SW1hZ2UobWVtYmVyLnVzZXIuYXZhdGFyVVJMKCkpO1xuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoZW1iZWQpO1xuICAgIH1cbn1cbiJdfQ==