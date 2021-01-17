"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'bonk', 'latency', 'ms'],
            category: 'info',
            description: {
                content: "Check the DiscordAPI latency.",
                usage: 'ping',
                examples: ['ping']
            },
            ratelimit: 4
        });
    }
    async exec(message) {
        const sent = await message.util.reply('Just wait a moment...');
        const timeDiff = (Number(sent.editedAt) || Number(sent.createdAt)) - (Number(message.editedAt) || Number(message.createdAt));
        let embed = new discord_js_1.MessageEmbed()
            .setTitle('Bonk!')
            .setColor('RANDOM');
        let timestart = await Date.now();
        await embed.setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/53/flushed-face_1f633.png');
        let emojilate = `${Date.now() - timestart}ms`;
        embed.setDescription(`Message return time: **${timeDiff}**ms\nDiscordAPI latency: **${this.client.ws.ping}ms**\nFlushed WebSocket ping: **${emojilate}**`);
        return message.util.send(embed);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2luZm8vcGluZy1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXVDO0FBQ3ZDLDJDQUFpRDtBQUVqRCxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDNUM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDO1lBQzFDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDckI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCO1FBQzlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMvRCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDN0gsSUFBSSxLQUFLLEdBQUcsSUFBSSx5QkFBWSxFQUFFO2FBQzdCLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDakIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25CLElBQUksU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2hDLE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyx5R0FBeUcsQ0FBQyxDQUFBO1FBQ25JLElBQUksU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsSUFBSSxDQUFBO1FBQzdDLEtBQUssQ0FBQyxjQUFjLENBQUMsMEJBQTBCLFFBQVEsK0JBQStCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksbUNBQW1DLFNBQVMsSUFBSSxDQUFDLENBQUE7UUFDMUosT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0o7QUF6QkQsOEJBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tYW5kfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XG5pbXBvcnQge01lc3NhZ2UsIE1lc3NhZ2VFbWJlZH0gZnJvbSAnZGlzY29yZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncGluZycsIHtcbiAgICAgICAgICAgIGFsaWFzZXM6IFsncGluZycsICdib25rJywgJ2xhdGVuY3knLCAnbXMnXSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnaW5mbycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQ2hlY2sgdGhlIERpc2NvcmRBUEkgbGF0ZW5jeS5cIixcbiAgICAgICAgICAgICAgICB1c2FnZTogJ3BpbmcnLFxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbJ3BpbmcnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhdGVsaW1pdDogNFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSk6IFByb21pc2U8TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBzZW50ID0gYXdhaXQgbWVzc2FnZS51dGlsLnJlcGx5KCdKdXN0IHdhaXQgYSBtb21lbnQuLi4nKTtcbiAgICAgICAgY29uc3QgdGltZURpZmYgPSAoTnVtYmVyKHNlbnQuZWRpdGVkQXQpIHx8IE51bWJlcihzZW50LmNyZWF0ZWRBdCkpIC0gKE51bWJlcihtZXNzYWdlLmVkaXRlZEF0KSB8fCBOdW1iZXIobWVzc2FnZS5jcmVhdGVkQXQpKTtcbiAgICAgICAgbGV0IGVtYmVkID0gbmV3IE1lc3NhZ2VFbWJlZCgpXG4gICAgICAgIC5zZXRUaXRsZSgnQm9uayEnKVxuICAgICAgICAuc2V0Q29sb3IoJ1JBTkRPTScpXG4gICAgICAgIGxldCB0aW1lc3RhcnQgPSBhd2FpdCBEYXRlLm5vdygpXG4gICAgICAgIGF3YWl0IGVtYmVkLnNldFRodW1ibmFpbCgnaHR0cHM6Ly9lbW9qaXBlZGlhLXVzLnMzLmR1YWxzdGFjay51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS90aHVtYnMvMTYwL3R3aXR0ZXIvNTMvZmx1c2hlZC1mYWNlXzFmNjMzLnBuZycpXG4gICAgICAgIGxldCBlbW9qaWxhdGUgPSBgJHtEYXRlLm5vdygpIC0gdGltZXN0YXJ0fW1zYFxuICAgICAgICBlbWJlZC5zZXREZXNjcmlwdGlvbihgTWVzc2FnZSByZXR1cm4gdGltZTogKioke3RpbWVEaWZmfSoqbXNcXG5EaXNjb3JkQVBJIGxhdGVuY3k6ICoqJHt0aGlzLmNsaWVudC53cy5waW5nfW1zKipcXG5GbHVzaGVkIFdlYlNvY2tldCBwaW5nOiAqKiR7ZW1vamlsYXRlfSoqYClcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGVtYmVkKTtcbiAgICB9XG59XG4iXX0=