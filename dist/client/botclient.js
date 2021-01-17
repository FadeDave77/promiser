"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config");
const config_2 = require("../config");
const database_1 = __importDefault(require("../structures/database"));
const prefix_1 = require("../models/prefix");
;
;
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.OwnerId
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, '..', 'listeners')
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, '..', 'commands'),
            prefix: async (message) => {
                if (message.guild) {
                    const newPrefix = await this.db.getRepository(prefix_1.Prefix).findOne({ guild: message.guild.id }).then(e => { return e.value; }).catch(() => null);
                    return newPrefix ? newPrefix : config_2.Prefix;
                }
                return config_2.Prefix;
            },
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    cancelWord: 'exit',
                    modifyStart: (_, str) => `${str}\n\nType \`exit\` to exit the prompt.`,
                    modifyRetry: (_, str) => `${str}\n\nType \`exit\` to exit the prompt.`,
                    timeout: "You didn't answer in time, the prompt exited automatically.",
                    ended: "You have exceeded the maximum amount of tries, the command exited.",
                    cancel: "Command cancelled.",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            },
            ignorePermissions: config_1.OwnerId
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
        this.db = database_1.default.get(config_1.dbName);
        await this.db.connect();
        await this.db.synchronize();
    }
    ;
    async start() {
        await this._init();
        return this.login(this.config.Token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90Y2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9ib3RjbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBNkU7QUFFN0UsK0JBQTBCO0FBRTFCLHNDQUFpRDtBQUNqRCxzQ0FBa0Q7QUFDbEQsc0VBQThDO0FBQzlDLDZDQUF5QztBQVF4QyxDQUFDO0FBS0QsQ0FBQztBQUVGLE1BQXFCLFNBQVUsU0FBUSw2QkFBWTtJQW1DL0MsWUFBbUIsTUFBa0I7UUFDakMsS0FBSyxDQUFDO1lBQ0YsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQzFCLENBQUMsQ0FBQztRQW5DQSxvQkFBZSxHQUFvQixJQUFJLGdDQUFlLENBQUMsSUFBSSxFQUFFO1lBQ2hFLFNBQVMsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUM7U0FDaEQsQ0FBQyxDQUFDO1FBQ0ksbUJBQWMsR0FBbUIsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBRTtZQUM3RCxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDO1lBQzVDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ3RCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtvQkFDZixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGVBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxFQUFFLEdBQUUsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUNwSSxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFhLENBQUE7aUJBQy9DO2dCQUNELE9BQU8sZUFBYSxDQUFDO1lBQ3pCLENBQUM7WUFDRCxZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixtQkFBbUIsRUFBRSxHQUFHO1lBQ3hCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGdCQUFnQixFQUFFO2dCQUNkLE1BQU0sRUFBRztvQkFDTCxVQUFVLEVBQUUsTUFBTTtvQkFDbEIsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLHVDQUF1QztvQkFDL0YsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLHVDQUF1QztvQkFDL0YsT0FBTyxFQUFFLDZEQUE2RDtvQkFDdEUsS0FBSyxFQUFFLG9FQUFvRTtvQkFDM0UsTUFBTSxFQUFFLG9CQUFvQjtvQkFDNUIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDaEI7WUFDRCxpQkFBaUIsRUFBRSxnQkFBTztTQUM3QixDQUFDLENBQUM7UUFLQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ08sS0FBSyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUM3QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE9BQU87U0FDVixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsQ0FBQztRQUMvQixNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFBQSxDQUFDO0lBQ0ssS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUEzREQsNEJBMkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBa2Fpcm9DbGllbnQsIENvbW1hbmRIYW5kbGVyLCBMaXN0ZW5lckhhbmRsZXJ9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7VXNlciwgTWVzc2FnZX0gZnJvbSAnZGlzY29yZC5qcyc7XG5pbXBvcnQge2pvaW59IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiwgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHtUb2tlbiwgT3duZXJJZCwgZGJOYW1lfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtQcmVmaXggYXMgZGVmYXVsdFByZWZpeH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBEYXRhYmFzZSBmcm9tICcuLi9zdHJ1Y3R1cmVzL2RhdGFiYXNlJztcbmltcG9ydCB7IFByZWZpeCB9IGZyb20gJy4uL21vZGVscy9wcmVmaXgnXG5cbmRlY2xhcmUgbW9kdWxlIFwiZGlzY29yZC1ha2Fpcm9cIiB7XG4gICAgaW50ZXJmYWNlIEFrYWlyb0NsaWVudCB7XG4gICAgICAgIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlcjtcbiAgICAgICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XG4gICAgICAgIGRiOiBDb25uZWN0aW9uO1xuICAgIH1cbn07XG5cbmludGVyZmFjZSBCb3RPcHRpb25zIHtcbiAgICBUb2tlbj86IHN0cmluZztcbiAgICBPd25lcklkPzogc3RyaW5nIHwgc3RyaW5nW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3RDbGllbnQgZXh0ZW5kcyBBa2Fpcm9DbGllbnQge1xuICAgIHB1YmxpYyBjb25maWc6IEJvdE9wdGlvbnM7XG4gICAgcHVibGljIGRiITogQ29ubmVjdGlvbjtcbiAgICBwdWJsaWMgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXIgPSBuZXcgTGlzdGVuZXJIYW5kbGVyKHRoaXMsIHtcbiAgICAgICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgJy4uJywgJ2xpc3RlbmVycycpXG4gICAgfSk7XG4gICAgcHVibGljIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB7XG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsICcuLicsICdjb21tYW5kcycpLFxuICAgICAgICBwcmVmaXg6IGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5ndWlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ByZWZpeCA9IGF3YWl0IHRoaXMuZGIuZ2V0UmVwb3NpdG9yeShQcmVmaXgpLmZpbmRPbmUoe2d1aWxkOiBtZXNzYWdlLmd1aWxkLmlkfSkudGhlbihlPT4ge3JldHVybiBlLnZhbHVlfSkuY2F0Y2goKCk9PiBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQcmVmaXggPyBuZXdQcmVmaXggOiBkZWZhdWx0UHJlZml4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFByZWZpeDtcbiAgICAgICAgfSxcbiAgICAgICAgYWxsb3dNZW50aW9uOiB0cnVlLFxuICAgICAgICBoYW5kbGVFZGl0czogdHJ1ZSxcbiAgICAgICAgY29tbWFuZFV0aWw6IHRydWUsXG4gICAgICAgIGNvbW1hbmRVdGlsTGlmZXRpbWU6IDNlNSxcbiAgICAgICAgZGVmYXVsdENvb2xkb3duOiA2ZTQsXG4gICAgICAgIGFyZ3VtZW50RGVmYXVsdHM6IHtcbiAgICAgICAgICAgIHByb21wdDogIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxXb3JkOiAnZXhpdCcsXG4gICAgICAgICAgICAgICAgbW9kaWZ5U3RhcnQ6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PiBgJHtzdHJ9XFxuXFxuVHlwZSBcXGBleGl0XFxgIHRvIGV4aXQgdGhlIHByb21wdC5gLFxuICAgICAgICAgICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7c3RyfVxcblxcblR5cGUgXFxgZXhpdFxcYCB0byBleGl0IHRoZSBwcm9tcHQuYCxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiBcIllvdSBkaWRuJ3QgYW5zd2VyIGluIHRpbWUsIHRoZSBwcm9tcHQgZXhpdGVkIGF1dG9tYXRpY2FsbHkuXCIsXG4gICAgICAgICAgICAgICAgZW5kZWQ6IFwiWW91IGhhdmUgZXhjZWVkZWQgdGhlIG1heGltdW0gYW1vdW50IG9mIHRyaWVzLCB0aGUgY29tbWFuZCBleGl0ZWQuXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsOiBcIkNvbW1hbmQgY2FuY2VsbGVkLlwiLFxuICAgICAgICAgICAgICAgIHJldHJpZXM6IDMsXG4gICAgICAgICAgICAgICAgdGltZTogM2U0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3RoZXJ3aXNlOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIGlnbm9yZVBlcm1pc3Npb25zOiBPd25lcklkXG4gICAgfSk7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogQm90T3B0aW9ucykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBvd25lcklEOiBjb25maWcuT3duZXJJZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgfVxuICAgIHByaXZhdGUgYXN5bmMgX2luaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXIudXNlTGlzdGVuZXJIYW5kbGVyKHRoaXMubGlzdGVuZXJIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xuICAgICAgICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXG4gICAgICAgICAgICBsaXN0ZW5lckhhbmRsZXI6IHRoaXMubGlzdGVuZXJIYW5kbGVyLFxuICAgICAgICAgICAgcHJvY2Vzc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb21tYW5kSGFuZGxlci5sb2FkQWxsKCk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLmxvYWRBbGwoKTtcblxuICAgICAgICB0aGlzLmRiID0gRGF0YWJhc2UuZ2V0KGRiTmFtZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuZGIuY29ubmVjdCgpO1xuICAgICAgICBhd2FpdCB0aGlzLmRiLnN5bmNocm9uaXplKCk7XG4gICAgfTtcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5faW5pdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbih0aGlzLmNvbmZpZy5Ub2tlbik7XG4gICAgfVxufVxuIl19