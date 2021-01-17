"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const giveaways_1 = require("../../models/giveaways");
const giveawaymanager_1 = __importDefault(require("../../structures/giveawaymanager"));
const config_1 = require("../../config");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready',
            category: 'client'
        });
    }
    ;
    exec() {
        const giveawayRepo = this.client.db.getRepository(giveaways_1.Giveaways);
        console.log(`promiser is up on ${this.client.user.tag}`);
        this.client.setMaxListeners(30);
        setTimeout(() => { this.client.user.setStatus('dnd'); }, 2000);
        setTimeout(() => { this.client.user.setActivity(`for ${config_1.Prefix}help`, { type: 'WATCHING' }); }, 2000);
        setInterval(async () => {
            const giveaways = await giveawayRepo.find();
            giveaways.filter(g => g.end <= Math.round(Date.now()) / 1000).map(async (g) => {
                const msg = await this.client.channels.cache.get(g.channel).messages.fetch(g.message)
                    .catch(() => msg.channel.send('An unknown error has occurred.'));
                msg.id;
                if (!msg)
                    return giveawayRepo.delete(g);
                giveawaymanager_1.default.end(giveawayRepo, msg);
            });
        }, 6e4);
    }
    ;
}
exports.default = ReadyListener;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHktbGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlzdGVuZXJzL2NsaWVudC9yZWFkeS1saXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1EQUF3QztBQUd4QyxzREFBbUQ7QUFDbkQsdUZBQStEO0FBQy9ELHlDQUFzQztBQUd0QyxNQUFxQixhQUFjLFNBQVEseUJBQVE7SUFDL0M7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ1gsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQUEsQ0FBQztJQUNLLElBQUk7UUFDUCxNQUFNLFlBQVksR0FBMEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsQ0FBQztRQUVwRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLGVBQU0sTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEcsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ25CLE1BQU0sU0FBUyxHQUFnQixNQUFNLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6RCxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7Z0JBQ3hFLE1BQU0sR0FBRyxHQUFZLE1BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztxQkFDMUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztnQkFDckUsR0FBRyxDQUFDLEVBQUUsQ0FBQTtnQkFDTixJQUFJLENBQUMsR0FBRztvQkFBRSxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLHlCQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFBQSxDQUFDO0NBQ0w7QUExQkQsZ0NBMEJDO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdGVuZXJ9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7IFRleHRDaGFubmVsLCBNZXNzYWdlfSBmcm9tICdkaXNjb3JkLmpzJztcbmltcG9ydCB7IFJlcG9zaXRvcnkgfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IEdpdmVhd2F5cyB9IGZyb20gJy4uLy4uL21vZGVscy9naXZlYXdheXMnO1xuaW1wb3J0IEdpdmVhd2F5TWFuYWdlciBmcm9tICcuLi8uLi9zdHJ1Y3R1cmVzL2dpdmVhd2F5bWFuYWdlcic7XG5pbXBvcnQgeyBQcmVmaXggfSAgZnJvbSAnLi4vLi4vY29uZmlnJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWR5TGlzdGVuZXIgZXh0ZW5kcyBMaXN0ZW5lciB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmVhZHknLCB7XG4gICAgICAgICAgICBlbWl0dGVyOiAnY2xpZW50JyxcbiAgICAgICAgICAgIGV2ZW50OiAncmVhZHknLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdjbGllbnQnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcHVibGljIGV4ZWMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGdpdmVhd2F5UmVwbzogUmVwb3NpdG9yeTxHaXZlYXdheXM+ID0gdGhpcy5jbGllbnQuZGIuZ2V0UmVwb3NpdG9yeShHaXZlYXdheXMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGBwcm9taXNlciBpcyB1cCBvbiAke3RoaXMuY2xpZW50LnVzZXIudGFnfWApO1xuICAgICAgICB0aGlzLmNsaWVudC5zZXRNYXhMaXN0ZW5lcnMoMzApXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMuY2xpZW50LnVzZXIuc2V0U3RhdHVzKCdkbmQnKX0sIDIwMDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLmNsaWVudC51c2VyLnNldEFjdGl2aXR5KGBmb3IgJHtQcmVmaXh9aGVscGAsIHsgdHlwZTogJ1dBVENISU5HJyB9KX0sIDIwMDApO1xuICAgICAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnaXZlYXdheXM6IEdpdmVhd2F5c1tdID0gYXdhaXQgZ2l2ZWF3YXlSZXBvLmZpbmQoKTtcbiAgICAgICAgICAgIGdpdmVhd2F5cy5maWx0ZXIoZyA9PiBnLmVuZCA8PSBNYXRoLnJvdW5kKERhdGUubm93KCkpIC8gMTAwMCkubWFwKGFzeW5jIGcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1zZzogTWVzc2FnZSA9IGF3YWl0ICh0aGlzLmNsaWVudC5jaGFubmVscy5jYWNoZS5nZXQoZy5jaGFubmVsKSBhcyBUZXh0Q2hhbm5lbCkubWVzc2FnZXMuZmV0Y2goZy5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gbXNnLmNoYW5uZWwuc2VuZCgnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJyZWQuJykpO1xuICAgICAgICAgICAgICAgIG1zZy5pZFxuICAgICAgICAgICAgICAgIGlmICghbXNnKSByZXR1cm4gZ2l2ZWF3YXlSZXBvLmRlbGV0ZShnKTtcbiAgICAgICAgICAgICAgICBHaXZlYXdheU1hbmFnZXIuZW5kKGdpdmVhd2F5UmVwbywgbXNnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA2ZTQpO1xuICAgIH07XG59O1xuIl19