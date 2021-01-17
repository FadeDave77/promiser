"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const config_1 = require("../../config");
class GuildsCommand extends discord_akairo_1.Command {
    constructor() {
        super('guilds', {
            aliases: ['guilds', 'servers'],
            category: 'owner',
            description: {
                content: 'Get the all joined guilds..',
                usage: 'guilds',
                examples: ['servers'] //exampleArray
            },
            ratelimit: 6 //how many times can you execute / minute
        });
    }
    async exec(message) {
        if (message.author.id !== config_1.OwnerId)
            return message.util.send('You are not a bot owner, you don\'t have permission to use this command.');
        message.util.send('### START SERVER ECHO ###');
        await this.client.guilds.cache.forEach(guild => {
            message.util.send(`${guild.name} | ${guild.id}`);
        });
        return message.util.send('### END SERVER ECHO ###');
    }
}
exports.default = GuildsCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRzLWNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvb3duZXIvZ3VpbGRzLWNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMseUNBQXFDO0FBRXJDLE1BQXFCLGFBQWMsU0FBUSx3QkFBTztJQUM5QztRQUNJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO1lBQzlCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsNkJBQTZCO2dCQUN0QyxLQUFLLEVBQUUsUUFBUTtnQkFDZixRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjO2FBQ3ZDO1lBQ0QsU0FBUyxFQUFFLENBQUMsQ0FBQyx5Q0FBeUM7U0FDekQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZ0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxnQkFBTztZQUFFLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEVBQTBFLENBQUMsQ0FBQztRQUN4SSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1FBQzlDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDaEQsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNKO0FBckJELGdDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybyc7XG5pbXBvcnQge01lc3NhZ2UsIEd1aWxkTWVtYmVyLCBNZXNzYWdlRW1iZWQsIEltYWdlU2l6ZSwgVGV4dENoYW5uZWwsIE1lc3NhZ2VBdHRhY2htZW50fSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB7T3duZXJJZH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpbGRzQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2d1aWxkcycsIHsgLy9uYW1lXG4gICAgICAgICAgICBhbGlhc2VzOiBbJ2d1aWxkcycsICdzZXJ2ZXJzJ10sIC8vYWxpYXNlc1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdvd25lcicsIC8vY2F0ZWdvcnkgb2YgY29tbWFuZFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnR2V0IHRoZSBhbGwgam9pbmVkIGd1aWxkcy4uJywgLy9kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIHVzYWdlOiAnZ3VpbGRzJywgLy9ob3cgdG8gdXNlXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFsnc2VydmVycyddIC8vZXhhbXBsZUFycmF5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmF0ZWxpbWl0OiA2IC8vaG93IG1hbnkgdGltZXMgY2FuIHlvdSBleGVjdXRlIC8gbWludXRlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgYXN5bmMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XG4gICAgICAgIGlmIChtZXNzYWdlLmF1dGhvci5pZCAhPT0gT3duZXJJZCkgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKCdZb3UgYXJlIG5vdCBhIGJvdCBvd25lciwgeW91IGRvblxcJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIHVzZSB0aGlzIGNvbW1hbmQuJyk7XG4gICAgICAgIG1lc3NhZ2UudXRpbC5zZW5kKCcjIyMgU1RBUlQgU0VSVkVSIEVDSE8gIyMjJylcbiAgICAgICAgYXdhaXQgdGhpcy5jbGllbnQuZ3VpbGRzLmNhY2hlLmZvckVhY2goZ3VpbGQgPT4ge1xuICAgICAgICBtZXNzYWdlLnV0aWwuc2VuZChgJHtndWlsZC5uYW1lfSB8ICR7Z3VpbGQuaWR9YClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKCcjIyMgRU5EIFNFUlZFUiBFQ0hPICMjIycpO1xuICAgIH1cbn1cbiJdfQ==