"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const config_1 = require("../../config");
class GuildMemberCommand extends discord_akairo_1.Command {
    constructor() {
        super('members', {
            aliases: ['members', 'guildmembers'],
            category: 'owner',
            description: {
                content: 'Get the all members of the guild.',
                usage: 'members',
                examples: ['guildmembers'] //exampleArray
            },
            ratelimit: 6 //how many times can you execute / minute
        });
    }
    async exec(message) {
        if (message.author.id !== (config_1.OwnerId && message.guild.ownerID))
            return message.util.send('You are not a bot or server owner, you don\'t have permission to use this command.');
        message.util.send('### START MEMBER ECHO ###');
        await message.guild.members.cache.forEach(member => {
            message.util.send(`${member.user.tag} | ${member.id}`);
        });
        return message.util.send('### END MEMBER ECHO ###');
    }
}
exports.default = GuildMemberCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRtZW1iZXItY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9vd25lci9ndWlsZG1lbWJlci1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBRXpDLHlDQUFxQztBQUVyQyxNQUFxQixrQkFBbUIsU0FBUSx3QkFBTztJQUNuRDtRQUNJLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsbUNBQW1DO2dCQUM1QyxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsY0FBYzthQUM1QztZQUNELFNBQVMsRUFBRSxDQUFDLENBQUMseUNBQXlDO1NBQ3pELENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWdCO1FBQzlCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxnQkFBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQUUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO1FBQzdLLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUE7UUFDOUMsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDdEQsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNKO0FBckJELHFDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XG5pbXBvcnQge01lc3NhZ2UsIEd1aWxkTWVtYmVyLCBNZXNzYWdlRW1iZWQsIEltYWdlU2l6ZSwgVGV4dENoYW5uZWwsIE1lc3NhZ2VBdHRhY2htZW50fSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB7T3duZXJJZH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpbGRNZW1iZXJDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignbWVtYmVycycsIHsgLy9uYW1lXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ21lbWJlcnMnLCAnZ3VpbGRtZW1iZXJzJ10sIC8vYWxpYXNlc1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdvd25lcicsIC8vY2F0ZWdvcnkgb2YgY29tbWFuZFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnR2V0IHRoZSBhbGwgbWVtYmVycyBvZiB0aGUgZ3VpbGQuJywgLy9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIHVzYWdlOiAnbWVtYmVycycsIC8vaG93IHRvIHVzZVxuICAgICAgICAgICAgICAgIGV4YW1wbGVzOiBbJ2d1aWxkbWVtYmVycyddIC8vZXhhbXBsZUFycmF5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmF0ZWxpbWl0OiA2IC8vaG93IG1hbnkgdGltZXMgY2FuIHlvdSBleGVjdXRlIC8gbWludXRlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XG4gICAgICAgIGlmIChtZXNzYWdlLmF1dGhvci5pZCAhPT0gKE93bmVySWQgJiYgbWVzc2FnZS5ndWlsZC5vd25lcklEKSkgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKCdZb3UgYXJlIG5vdCBhIGJvdCBvciBzZXJ2ZXIgb3duZXIsIHlvdSBkb25cXCd0IGhhdmUgcGVybWlzc2lvbiB0byB1c2UgdGhpcyBjb21tYW5kLicpO1xuICAgICAgICBtZXNzYWdlLnV0aWwuc2VuZCgnIyMjIFNUQVJUIE1FTUJFUiBFQ0hPICMjIycpXG4gICAgICAgIGF3YWl0IG1lc3NhZ2UuZ3VpbGQubWVtYmVycy5jYWNoZS5mb3JFYWNoKG1lbWJlciA9PiB7XG4gICAgICAgIG1lc3NhZ2UudXRpbC5zZW5kKGAke21lbWJlci51c2VyLnRhZ30gfCAke21lbWJlci5pZH1gKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoJyMjIyBFTkQgTUVNQkVSIEVDSE8gIyMjJyk7XG4gICAgfVxufVxuIl19