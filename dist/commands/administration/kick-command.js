"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const config_1 = require("../../config");
class KickCommand extends discord_akairo_1.Command {
    constructor() {
        super('kick', {
            aliases: ['kick'],
            category: 'administration',
            description: {
                content: 'Kick a member from the guild.',
                usage: 'Kick <user>',
                examples: ['kick @FadeDave#7005', 'kick 347822600136949763'] //exampleArray
            },
            userPermissions: ['KICK_MEMBERS'],
            channel: 'guild',
            ratelimit: 6,
            args: [
                {
                    id: 'member',
                    type: 'member',
                    prompt: {
                        start: (msg) => `Provide a member to kick, ${msg.author}:`,
                        retry: (msg) => `Provide a valid member to kick, ${msg.author}:`
                    }
                }
            ]
        });
    }
    exec(message, { member }) {
        if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== (message.guild.ownerID && config_1.OwnerId))
            return message.util.reply('The member you are trying to kick, has higher or equal roles to you!');
        else if (member.kickable) {
            member.kick().catch(() => null);
            return message.util.send(`"${member}" has been kicked.`);
        }
        else {
            return message.util.reply('That member is not kickable. The bot is missing permissions, or the member is a server owner.');
        }
    }
    ;
}
exports.default = KickCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2FkbWluaXN0cmF0aW9uL2tpY2stY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUV6Qyx5Q0FBcUM7QUFFckMsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsUUFBUSxFQUFFLENBQUMscUJBQXFCLEVBQUMseUJBQXlCLENBQUMsQ0FBQyxjQUFjO2FBQzdFO1lBQ0QsZUFBZSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2pDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osSUFBSSxFQUFFO2dCQUNGO29CQUNJLEVBQUUsRUFBQyxRQUFRO29CQUNYLElBQUksRUFBRSxRQUFRO29CQUNkLE1BQU0sRUFBRTt3QkFDSixLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLDZCQUE2QixHQUFHLENBQUMsTUFBTSxHQUFHO3dCQUNuRSxLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLG1DQUFtQyxHQUFHLENBQUMsTUFBTSxHQUFHO3FCQUM1RTtpQkFDSjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUFnQixFQUFFLEVBQUMsTUFBTSxFQUF3QjtRQUN6RCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksZ0JBQU8sQ0FBQztZQUNsSSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7YUFDakcsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sb0JBQW9CLENBQUMsQ0FBQztTQUM1RDthQUNJO1lBQ0QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQywrRkFBK0YsQ0FBQyxDQUFDO1NBQzlIO0lBQ0wsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQXBDRCw4QkFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xuaW1wb3J0IHtNZXNzYWdlLCBHdWlsZE1lbWJlciwgTWVzc2FnZUVtYmVkLCBJbWFnZVNpemUsIFRleHRDaGFubmVsLCBNZXNzYWdlQXR0YWNobWVudH0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQge093bmVySWR9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpY2tDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigna2ljaycsIHsgLy9uYW1lXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ2tpY2snXSwgLy9hbGlhc2VzXG4gICAgICAgICAgICBjYXRlZ29yeTogJ2FkbWluaXN0cmF0aW9uJywgLy9jYXRlZ29yeSBvZiBjb21tYW5kXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdLaWNrIGEgbWVtYmVyIGZyb20gdGhlIGd1aWxkLicsIC8vZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB1c2FnZTogJ0tpY2sgPHVzZXI+JywgLy9ob3cgdG8gdXNlXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFsna2ljayBARmFkZURhdmUjNzAwNScsJ2tpY2sgMzQ3ODIyNjAwMTM2OTQ5NzYzJ10gLy9leGFtcGxlQXJyYXlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VyUGVybWlzc2lvbnM6IFsnS0lDS19NRU1CRVJTJ10sXG4gICAgICAgICAgICBjaGFubmVsOiAnZ3VpbGQnLFxuICAgICAgICAgICAgcmF0ZWxpbWl0OiA2LCAvL2hvdyBtYW55IHRpbWVzIGNhbiB5b3UgZXhlY3V0ZSAvIG1pbnV0ZVxuICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6J21lbWJlcicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PiBgUHJvdmlkZSBhIG1lbWJlciB0byBraWNrLCAke21zZy5hdXRob3J9OmAsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeTogKG1zZzogTWVzc2FnZSkgPT4gYFByb3ZpZGUgYSB2YWxpZCBtZW1iZXIgdG8ga2ljaywgJHttc2cuYXV0aG9yfTpgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlLCB7bWVtYmVyfToge21lbWJlcjogR3VpbGRNZW1iZXJ9ICk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgICAgICBpZiAobWVtYmVyLnJvbGVzLmhpZ2hlc3QucG9zaXRpb24gPj0gbWVzc2FnZS5tZW1iZXIucm9sZXMuaGlnaGVzdC5wb3NpdGlvbiAmJiBtZXNzYWdlLmF1dGhvci5pZCAhPT0gKG1lc3NhZ2UuZ3VpbGQub3duZXJJRCAmJiBPd25lcklkKSlcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwucmVwbHkoJ1RoZSBtZW1iZXIgeW91IGFyZSB0cnlpbmcgdG8ga2ljaywgaGFzIGhpZ2hlciBvciBlcXVhbCByb2xlcyB0byB5b3UhJyk7XG4gICAgICAgIGVsc2UgaWYgKG1lbWJlci5raWNrYWJsZSkge1xuICAgICAgICAgICAgbWVtYmVyLmtpY2soKS5jYXRjaCgoKSA9PiBudWxsKTtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChgXCIke21lbWJlcn1cIiBoYXMgYmVlbiBraWNrZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnJlcGx5KCdUaGF0IG1lbWJlciBpcyBub3Qga2lja2FibGUuIFRoZSBib3QgaXMgbWlzc2luZyBwZXJtaXNzaW9ucywgb3IgdGhlIG1lbWJlciBpcyBhIHNlcnZlciBvd25lci4nKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iXX0=