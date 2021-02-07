import {Listener} from 'discord-akairo';
import { TextChannel, Message} from 'discord.js';
import { Repository } from 'typeorm';
import { Giveaways } from '../../models/giveaways';
import GiveawayManager from '../../structures/giveawaymanager';
import { Prefix }  from '../../config'


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

        console.log(`promiser is up on ${this.client.user.tag} @ ${new Date().toString().substr(0,31)}`);
        this.client.setMaxListeners(30)
        setTimeout(() => {this.client.user.setActivity(`for ${Prefix}help`, { type: 'WATCHING' })}, 5000);
        setInterval(() => {this.client.user.setActivity(`for ${Prefix}help`, { type: 'WATCHING' })}, 864e5)
        setInterval(async () => {
            const giveaways: Giveaways[] = await giveawayRepo.find();
            giveaways.filter(g => g.end <= Math.round(Date.now()) / 1000).map(async g => {
                const msg: Message = await ((await this.client.channels.fetch(g.channel) as TextChannel).messages.fetch(g.message).catch(() => null));
                if (!msg) return giveawayRepo.delete(g);
                GiveawayManager.end(giveawayRepo, msg);
            });
        }, 6e4);
    };
};
