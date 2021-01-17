"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const ms_1 = __importDefault(require("ms"));
const giveaways_1 = require("../../models/giveaways");
const giveawaymanager_1 = __importDefault(require("../../structures/giveawaymanager"));
class GiveawayCommand extends discord_akairo_1.Command {
    constructor() {
        super('giveaway', {
            aliases: ['giveaway', 'gaway'],
            category: 'utility',
            description: {
                content: 'Start a giveaway',
                usage: 'giveaway <time> <item>',
                examples: ['giveaway 5d flush plush'] //exampleArray
            },
            ratelimit: 6,
            channel: 'guild',
            args: [
                {
                    id: 'time',
                    type: (msg, str) => {
                        if (str)
                            return Number(ms_1.default(str));
                    },
                    prompt: {
                        start: (msg) => `${msg.author}, you need to provide a time when the giveaway will end!`,
                        retry: (msg) => `${msg.author}, please provide a valid time!`
                    }
                },
                {
                    id: 'item',
                    type: 'string',
                    match: 'rest',
                    prompt: {
                        start: (msg) => `${msg.author}, provide an item to give away!`
                    }
                }
            ]
        });
    }
    async exec(message, { time, item }) {
        const giveawayRepo = this.client.db.getRepository(giveaways_1.Giveaways);
        const end = Date.now() + time;
        const msg = await message.channel.send(new discord_js_1.MessageEmbed()
            .setAuthor(`Giveaway | ${item}`)
            .setColor(0x00ff00)
            .setDescription(`${message.author} is giving away **${item}**!`)
            .setFooter(`Giveaway will end at ${(new Date(end)).toString().substr(4, 27)}`));
        msg.react('🎉');
        giveawayRepo.insert({
            channel: msg.channel.id,
            message: msg.id,
            time: (Math.round((Date.now()) / 1000)),
            end: Math.round(end / 1000)
        });
        setTimeout(() => {
            giveawaymanager_1.default.end(giveawayRepo, msg);
        }, time);
    }
}
exports.default = GiveawayCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l2ZWF3YXktY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy91dGlsaXR5L2dpdmVhd2F5LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBeUM7QUFDekMsMkNBQW1EO0FBQ25ELDRDQUFvQjtBQUdwQixzREFBbUQ7QUFDbkQsdUZBQStEO0FBRS9ELE1BQXFCLGVBQWdCLFNBQVEsd0JBQU87SUFDaEQ7UUFDSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQztZQUM5QixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsUUFBUSxFQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBQyxjQUFjO2FBQ3ZEO1lBQ0QsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUU7Z0JBQ0Y7b0JBQ0ksRUFBRSxFQUFFLE1BQU07b0JBQ1YsSUFBSSxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQVcsRUFBRSxFQUFFO3dCQUNoQyxJQUFJLEdBQUc7NEJBQUUsT0FBTyxNQUFNLENBQUMsWUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7b0JBQ25DLENBQUM7b0JBQ0QsTUFBTSxFQUFFO3dCQUNKLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSwwREFBMEQ7d0JBQ2hHLEtBQUssRUFBRSxDQUFDLEdBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxnQ0FBZ0M7cUJBQ3pFO2lCQUNKO2dCQUNEO29CQUNJLEVBQUUsRUFBRSxNQUFNO29CQUNWLElBQUksRUFBRSxRQUFRO29CQUNkLEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRTt3QkFDSixLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0saUNBQWlDO3FCQUMxRTtpQkFDSjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0IsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQStCO1FBQzFFLE1BQU0sWUFBWSxHQUEwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdEMsTUFBTSxHQUFHLEdBQVksTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLHlCQUFZLEVBQUU7YUFDN0QsU0FBUyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7YUFDL0IsUUFBUSxDQUFDLFFBQVEsQ0FBQzthQUNsQixjQUFjLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxxQkFBcUIsSUFBSSxLQUFLLENBQUM7YUFDL0QsU0FBUyxDQUFDLHdCQUF3QixDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQ2pGLENBQUM7UUFDRixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDaEIsT0FBTyxFQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0QixPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDdkMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUM5QixDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1oseUJBQWUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7Q0FDSjtBQXRERCxrQ0FzREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnZGlzY29yZC1ha2Fpcm8nO1xuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZUVtYmVkIH0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQgbXMgZnJvbSAnbXMnO1xuaW1wb3J0IHsgUmVwb3NpdG9yeX0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IEdpdmVhd2F5cyB9IGZyb20gJy4uLy4uL21vZGVscy9naXZlYXdheXMnO1xuaW1wb3J0IEdpdmVhd2F5TWFuYWdlciBmcm9tICcuLi8uLi9zdHJ1Y3R1cmVzL2dpdmVhd2F5bWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdmVhd2F5Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2dpdmVhd2F5JywgeyAvL25hbWVcbiAgICAgICAgICAgIGFsaWFzZXM6IFsnZ2l2ZWF3YXknLCAnZ2F3YXknXSwgLy9hbGlhc2VzXG4gICAgICAgICAgICBjYXRlZ29yeTogJ3V0aWxpdHknLCAvL2NhdGVnb3J5IG9mIGNvbW1hbmRcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ1N0YXJ0IGEgZ2l2ZWF3YXknLCAvL2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgdXNhZ2U6ICdnaXZlYXdheSA8dGltZT4gPGl0ZW0+JywgLy9ob3cgdG8gdXNlXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFsnZ2l2ZWF3YXkgNWQgZmx1c2ggcGx1c2gnXSAvL2V4YW1wbGVBcnJheVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhdGVsaW1pdDogNiwgLy9ob3cgbWFueSB0aW1lcyBjYW4geW91IGV4ZWN1dGUgLyBtaW51dGVcbiAgICAgICAgICAgIGNoYW5uZWw6ICdndWlsZCcsXG4gICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAobXNnOiBNZXNzYWdlLCBzdHI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0cikgcmV0dXJuIE51bWJlcihtcyhzdHIpKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PiBgJHttc2cuYXV0aG9yfSwgeW91IG5lZWQgdG8gcHJvdmlkZSBhIHRpbWUgd2hlbiB0aGUgZ2l2ZWF3YXkgd2lsbCBlbmQhYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5OiAobXNnOiBNZXNzYWdlKSA9PiBgJHttc2cuYXV0aG9yfSwgcGxlYXNlIHByb3ZpZGUgYSB2YWxpZCB0aW1lIWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2g6ICdyZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogKG1zZzogTWVzc2FnZSkgPT4gYCR7bXNnLmF1dGhvcn0sIHByb3ZpZGUgYW4gaXRlbSB0byBnaXZlIGF3YXkhYFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwge3RpbWUsIGl0ZW19OiB7dGltZTogbnVtYmVyLCBpdGVtOiBzdHJpbmd9KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgZ2l2ZWF3YXlSZXBvOiBSZXBvc2l0b3J5PEdpdmVhd2F5cz4gPSB0aGlzLmNsaWVudC5kYi5nZXRSZXBvc2l0b3J5KEdpdmVhd2F5cyk7XG4gICAgICAgIGNvbnN0IGVuZDogbnVtYmVyID0gRGF0ZS5ub3coKSArIHRpbWU7XG4gICAgICAgIGNvbnN0IG1zZzogTWVzc2FnZSA9IGF3YWl0IG1lc3NhZ2UuY2hhbm5lbC5zZW5kKG5ldyBNZXNzYWdlRW1iZWQoKVxuICAgICAgICAgICAgLnNldEF1dGhvcihgR2l2ZWF3YXkgfCAke2l0ZW19YClcbiAgICAgICAgICAgIC5zZXRDb2xvcigweDAwZmYwMClcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgJHttZXNzYWdlLmF1dGhvcn0gaXMgZ2l2aW5nIGF3YXkgKioke2l0ZW19KiohYClcbiAgICAgICAgICAgIC5zZXRGb290ZXIoYEdpdmVhd2F5IHdpbGwgZW5kIGF0ICR7KG5ldyBEYXRlKGVuZCkpLnRvU3RyaW5nKCkuc3Vic3RyKDQsIDI3KX1gKVxuICAgICAgICApO1xuICAgICAgICBtc2cucmVhY3QoJ/CfjoknKTtcbiAgICAgICAgZ2l2ZWF3YXlSZXBvLmluc2VydCh7XG4gICAgICAgICAgICBjaGFubmVsOm1zZy5jaGFubmVsLmlkLFxuICAgICAgICAgICAgbWVzc2FnZTogbXNnLmlkLFxuICAgICAgICAgICAgdGltZTogKE1hdGgucm91bmQoKERhdGUubm93KCkpIC8gMTAwMCkpLFxuICAgICAgICAgICAgZW5kOiBNYXRoLnJvdW5kKGVuZCAvIDEwMDApXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIEdpdmVhd2F5TWFuYWdlci5lbmQoZ2l2ZWF3YXlSZXBvLCBtc2cpXG4gICAgICAgIH0sIHRpbWUpO1xuICAgIH1cbn1cbiJdfQ==