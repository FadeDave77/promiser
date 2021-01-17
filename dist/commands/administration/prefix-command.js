"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const prefix_1 = require("../../models/prefix");
class PrefixCommand extends discord_akairo_1.Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix'],
            category: 'administration',
            description: {
                content: 'Change the prefix of the bot on the server.',
                usage: 'prefix <newprefix>',
                examples: ['prefix !'] //exampleArray
            },
            ratelimit: 3,
            channel: 'guild',
            userPermissions: ['ADMINISTRATOR'],
            args: [
                {
                    id: 'prefix',
                    type: 'string',
                    prompt: {
                        start: (msg) => `Provide a new prefix, ${msg.author}:`,
                        retry: (msg) => `Provide a new valid prefix, ${msg.author}:`
                    }
                }
            ]
        });
    }
    async exec(message, { prefix }) {
        const prefixRepo = this.client.db.getRepository(prefix_1.Prefix);
        prefixRepo.delete({ guild: message.guild.id }).catch(() => null);
        await prefixRepo.insert({
            guild: message.guild.id,
            value: prefix
        });
        return message.util.send(`Changed prefix to "${prefix}".`);
    }
    ;
}
exports.default = PrefixCommand;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4LWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvYWRtaW5pc3RyYXRpb24vcHJlZml4LWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFLekMsZ0RBQTZDO0FBRTdDLE1BQXFCLGFBQWMsU0FBUSx3QkFBTztJQUM5QztRQUNJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLDZDQUE2QztnQkFDdEQsS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsY0FBYzthQUN4QztZQUNELFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxFQUFFLE9BQU87WUFDaEIsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQ2xDLElBQUksRUFBRTtnQkFDRjtvQkFDSSxFQUFFLEVBQUUsUUFBUTtvQkFDWixJQUFJLEVBQUUsUUFBUTtvQkFDZCxNQUFNLEVBQUU7d0JBQ0osS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLE1BQU0sR0FBRzt3QkFDL0QsS0FBSyxFQUFFLENBQUMsR0FBWSxFQUFFLEVBQUUsQ0FBQywrQkFBK0IsR0FBRyxDQUFDLE1BQU0sR0FBRztxQkFDeEU7aUJBQ0o7YUFDSjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCLEVBQUUsRUFBQyxNQUFNLEVBQXNCO1FBQzdELE1BQU0sVUFBVSxHQUF1QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZUFBTSxDQUFDLENBQUM7UUFDNUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLEtBQUssRUFBRSxNQUFNO1NBQ2hCLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQWxDRCxnQ0FrQ0M7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7TWVzc2FnZSwgR3VpbGRNZW1iZXIsIE1lc3NhZ2VFbWJlZCwgSW1hZ2VTaXplLCBUZXh0Q2hhbm5lbCwgTWVzc2FnZUF0dGFjaG1lbnR9IGZyb20gJ2Rpc2NvcmQuanMnO1xuaW1wb3J0IHtSZXBvc2l0b3J5fSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IE93bmVySWQgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBQcmVmaXggfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJlZml4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZml4Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3ByZWZpeCcsIHsgLy9uYW1lXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ3ByZWZpeCddLCAvL2FsaWFzZXNcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYWRtaW5pc3RyYXRpb24nLCAvL2NhdGVnb3J5IG9mIGNvbW1hbmRcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ0NoYW5nZSB0aGUgcHJlZml4IG9mIHRoZSBib3Qgb24gdGhlIHNlcnZlci4nLCAvL2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgdXNhZ2U6ICdwcmVmaXggPG5ld3ByZWZpeD4nLCAvL2hvdyB0byB1c2VcbiAgICAgICAgICAgICAgICBleGFtcGxlczogWydwcmVmaXggISddIC8vZXhhbXBsZUFycmF5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzLCAvL2hvdyBtYW55IHRpbWVzIGNhbiB5b3UgZXhlY3V0ZSAvIG1pbnV0ZVxuICAgICAgICAgICAgY2hhbm5lbDogJ2d1aWxkJyxcbiAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uczogWydBRE1JTklTVFJBVE9SJ10sXG4gICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3ByZWZpeCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAobXNnOiBNZXNzYWdlKSA9PiBgUHJvdmlkZSBhIG5ldyBwcmVmaXgsICR7bXNnLmF1dGhvcn06YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5OiAobXNnOiBNZXNzYWdlKSA9PiBgUHJvdmlkZSBhIG5ldyB2YWxpZCBwcmVmaXgsICR7bXNnLmF1dGhvcn06YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTogTWVzc2FnZSwge3ByZWZpeH06IHsgcHJlZml4IDogc3RyaW5nIH0pOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgcHJlZml4UmVwbzogUmVwb3NpdG9yeTxQcmVmaXg+ID0gdGhpcy5jbGllbnQuZGIuZ2V0UmVwb3NpdG9yeShQcmVmaXgpO1xuICAgICAgICBwcmVmaXhSZXBvLmRlbGV0ZSh7Z3VpbGQ6IG1lc3NhZ2UuZ3VpbGQuaWR9KS5jYXRjaCgoKT0+IG51bGwpO1xuICAgICAgICBhd2FpdCBwcmVmaXhSZXBvLmluc2VydCh7XG4gICAgICAgICAgICBndWlsZDogbWVzc2FnZS5ndWlsZC5pZCxcbiAgICAgICAgICAgIHZhbHVlOiBwcmVmaXhcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChgQ2hhbmdlZCBwcmVmaXggdG8gXCIke3ByZWZpeH1cIi5gKTtcbiAgICB9O1xufTtcbiJdfQ==