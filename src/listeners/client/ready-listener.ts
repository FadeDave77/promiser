import {Listener} from 'discord-akairo';
import { TextChannel, Message} from 'discord.js';
import { Repository } from 'typeorm';
import { Giveaways } from '../../models/giveaways';
import GiveawayManager from '../../structures/giveawaymanager';


export default class ReadyListener extends Listener {
    public constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready',
            category: 'client'
        });
    };
    public exec(): void {
        const giveawayRepo: Repository<Giveaways> = this.client.db.getRepository(Giveaways);

        console.log(`[nodemon] Up on ${this.client.user.tag}`);

        setInterval(async () => {
            const giveaways: Giveaways[] = await giveawayRepo.find();
            giveaways.filter(g => g.end <= Math.round(Date.now()) / 1000).map(async g => {
                const msg: Message = await (this.client.channels.cache.get(g.channel) as TextChannel).messages.fetch(g.message)
                    .catch(() => msg.channel.send('An unknown error has occurred.'));
                msg.id
                if (!msg) return giveawayRepo.delete(g);
                GiveawayManager.end(giveawayRepo, msg);
            });
        }, 6e4);
    };
};
