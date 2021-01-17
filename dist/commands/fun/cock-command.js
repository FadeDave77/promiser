"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class CockCommand extends discord_akairo_1.Command {
    constructor() {
        super('cock', {
            aliases: ['cock', 'coq'],
            category: 'fun',
            description: {
                content: 'Get the size of cock :flushed:',
                usage: 'cock (member)',
                examples: ['cock', 'cock @FadeDave#7005'] //exampleArray
            },
            ratelimit: 6,
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
            .setTitle(`Oh, i see you got a cock there ${member.user.username} :eyes:`)
            .setColor('RANDOM')
            .setDescription(`It is **${Math.floor((Math.random() * 250)) / 10}cm** long :hushed:`);
        return message.util.send(embed);
    }
}
exports.default = CockCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29jay1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2Z1bi9jb2NrLWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFDekMsMkNBQXlHO0FBRXpHLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxnQ0FBZ0M7Z0JBQ3pDLEtBQUssRUFBRSxlQUFlO2dCQUN0QixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxjQUFjO2FBQzNEO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLFFBQVE7b0JBQ1osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsS0FBSyxFQUFFLE1BQU07b0JBQ2IsT0FBTyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTTtpQkFDeEM7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFDLE1BQU0sRUFBd0I7UUFDekQsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQy9CLFFBQVEsQ0FBQyxrQ0FBa0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLFNBQVMsQ0FBQzthQUN6RSxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ2xCLGNBQWMsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFbkYsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0o7QUE3QkQsOEJBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7TWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCwgSW1hZ2VTaXplLCBUZXh0Q2hhbm5lbCwgTWVzc2FnZUF0dGFjaG1lbnR9IGZyb20gJ2Rpc2NvcmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2NrQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NvY2snLCB7IC8vbmFtZVxuICAgICAgICAgICAgYWxpYXNlczogWydjb2NrJywgJ2NvcSddLCAvL2FsaWFzZXNcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZnVuJywgLy9jYXRlZ29yeSBvZiBjb21tYW5kXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdHZXQgdGhlIHNpemUgb2YgY29jayA6Zmx1c2hlZDonLCAvL2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgdXNhZ2U6ICdjb2NrIChtZW1iZXIpJywgLy9ob3cgdG8gdXNlXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFsnY29jaycsICdjb2NrIEBGYWRlRGF2ZSM3MDA1J10gLy9leGFtcGxlQXJyYXlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYXRlbGltaXQ6IDYsIC8vaG93IG1hbnkgdGltZXMgY2FuIHlvdSBleGVjdXRlIC8gbWludXRlXG4gICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ21lbWJlcicsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdtZW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogJ3Jlc3QnLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAobXNnOiBNZXNzYWdlKSA9PiBtc2cubWVtYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwge21lbWJlcn06IHttZW1iZXI6IEd1aWxkTWVtYmVyfSApOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgZW1iZWQgPSBuZXcgTWVzc2FnZUVtYmVkKClcbiAgICAgICAgLnNldFRpdGxlKGBPaCwgaSBzZWUgeW91IGdvdCBhIGNvY2sgdGhlcmUgJHttZW1iZXIudXNlci51c2VybmFtZX0gOmV5ZXM6YClcbiAgICAgICAgLnNldENvbG9yKCdSQU5ET00nKVxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oYEl0IGlzICoqJHtNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjI1MCkpLzEwfWNtKiogbG9uZyA6aHVzaGVkOmApO1xuXG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChlbWJlZCk7XG4gICAgfVxufVxuIl19