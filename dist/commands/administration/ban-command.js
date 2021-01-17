"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const config_1 = require("../../config");
class BanCommand extends discord_akairo_1.Command {
    constructor() {
        super('ban', {
            aliases: ['ban', 'yeet'],
            category: 'administration',
            description: {
                content: 'Ban a member from the guild.',
                usage: 'ban <user> (reason)',
                examples: ['ban @FadeDave#7005 too hot', 'ban 347822600136949763 not cool bro'] //exampleArray
            },
            userPermissions: ['BAN_MEMBERS'],
            channel: 'guild',
            ratelimit: 6,
            args: [
                {
                    id: 'member',
                    type: 'member',
                    prompt: {
                        start: (msg) => `Provide a member to ban, ${msg.author}:`,
                        retry: (msg) => `Provide a valid member to ban, ${msg.author}:`
                    }
                },
                {
                    id: 'reason',
                    type: 'string',
                    match: 'rest',
                    default: 'None'
                }
            ]
        });
    }
    exec(message, { member, reason }) {
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== (message.guild.ownerID && config_1.OwnerId))
            return message.util.reply('The member you are trying to ban, has higher or equal roles to you!');
        else if (member.bannable) {
            member.ban({ reason: reason }).catch(() => null);
            return message.util.send(`User "${member}" has been banned, with reason "${reason}".`);
        }
        else {
            return message.util.reply('That member is not bannable. The bot is missing permissions, or the member is a server owner.');
        }
    }
    ;
}
exports.default = BanCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvYWRtaW5pc3RyYXRpb24vYmFuLWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMseUNBQXFDO0FBRXJDLE1BQXFCLFVBQVcsU0FBUSx3QkFBTztJQUMzQztRQUNJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLFFBQVEsRUFBRSxDQUFDLDRCQUE0QixFQUFDLHFDQUFxQyxDQUFDLENBQUMsY0FBYzthQUNoRztZQUNELGVBQWUsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNoQyxPQUFPLEVBQUUsT0FBTztZQUNoQixTQUFTLEVBQUUsQ0FBQztZQUNaLElBQUksRUFBRTtnQkFDRjtvQkFDSSxFQUFFLEVBQUMsUUFBUTtvQkFDWCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyw0QkFBNEIsR0FBRyxDQUFDLE1BQU0sR0FBRzt3QkFDbEUsS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxrQ0FBa0MsR0FBRyxDQUFDLE1BQU0sR0FBRztxQkFDM0U7aUJBQ0o7Z0JBQ0Q7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsT0FBTyxFQUFFLE1BQU07aUJBQ2xCO2FBQ0o7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUEyQztRQUNwRixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZ0JBQU8sQ0FBQztZQUNsSSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7YUFDaEcsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLE1BQU0sbUNBQW1DLE1BQU0sSUFBSSxDQUFDLENBQUM7U0FDMUY7YUFDSTtZQUNELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsK0ZBQStGLENBQUMsQ0FBQztTQUM5SDtJQUNMLENBQUM7SUFBQSxDQUFDO0NBQ0w7QUExQ0QsNkJBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7TWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCwgSW1hZ2VTaXplLCBUZXh0Q2hhbm5lbCwgTWVzc2FnZUF0dGFjaG1lbnR9IGZyb20gJ2Rpc2NvcmQuanMnO1xuaW1wb3J0IHtPd25lcklkfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYW5Db21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignYmFuJywgeyAvL25hbWVcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnYmFuJywgJ3llZXQnXSwgLy9hbGlhc2VzXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2FkbWluaXN0cmF0aW9uJywgLy9jYXRlZ29yeSBvZiBjb21tYW5kXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdCYW4gYSBtZW1iZXIgZnJvbSB0aGUgZ3VpbGQuJywgLy9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIHVzYWdlOiAnYmFuIDx1c2VyPiAocmVhc29uKScsIC8vaG93IHRvIHVzZVxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbJ2JhbiBARmFkZURhdmUjNzAwNSB0b28gaG90JywnYmFuIDM0NzgyMjYwMDEzNjk0OTc2MyBub3QgY29vbCBicm8nXSAvL2V4YW1wbGVBcnJheVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogWydCQU5fTUVNQkVSUyddLFxuICAgICAgICAgICAgY2hhbm5lbDogJ2d1aWxkJyxcbiAgICAgICAgICAgIHJhdGVsaW1pdDogNiwgLy9ob3cgbWFueSB0aW1lcyBjYW4geW91IGV4ZWN1dGUgLyBtaW51dGVcbiAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOidtZW1iZXInLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKG1zZzogTWVzc2FnZSkgPT4gYFByb3ZpZGUgYSBtZW1iZXIgdG8gYmFuLCAke21zZy5hdXRob3J9OmAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeTogKG1zZzogTWVzc2FnZSkgPT4gYFByb3ZpZGUgYSB2YWxpZCBtZW1iZXIgdG8gYmFuLCAke21zZy5hdXRob3J9OmBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3JlYXNvbicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogJ3Jlc3QnLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAnTm9uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7bWVtYmVyLCByZWFzb259OiB7IG1lbWJlcjogR3VpbGRNZW1iZXIsIHJlYXNvbiA6IHN0cmluZyB9KTogUHJvbWlzZTxNZXNzYWdlPiB7XG4gICAgICAgIGlmIChtZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiA+PSBtZXNzYWdlLm1lbWJlci5yb2xlcy5oaWdoZXN0LnBvc2l0aW9uICYmIG1lc3NhZ2UuYXV0aG9yLmlkICE9PSAobWVzc2FnZS5ndWlsZC5vd25lcklEICYmIE93bmVySWQpKVxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5yZXBseSgnVGhlIG1lbWJlciB5b3UgYXJlIHRyeWluZyB0byBiYW4sIGhhcyBoaWdoZXIgb3IgZXF1YWwgcm9sZXMgdG8geW91IScpO1xuICAgICAgICBlbHNlIGlmIChtZW1iZXIuYmFubmFibGUpIHtcbiAgICAgICAgICAgIG1lbWJlci5iYW4oe3JlYXNvbjogcmVhc29ufSkuY2F0Y2goKCkgPT4gbnVsbCk7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoYFVzZXIgXCIke21lbWJlcn1cIiBoYXMgYmVlbiBiYW5uZWQsIHdpdGggcmVhc29uIFwiJHtyZWFzb259XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnJlcGx5KCdUaGF0IG1lbWJlciBpcyBub3QgYmFubmFibGUuIFRoZSBib3QgaXMgbWlzc2luZyBwZXJtaXNzaW9ucywgb3IgdGhlIG1lbWJlciBpcyBhIHNlcnZlciBvd25lci4nKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iXX0=