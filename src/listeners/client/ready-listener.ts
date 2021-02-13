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
    public async exec(): Promise<void> {
        const giveawayRepo: Repository<Giveaways> = this.client.db.getRepository(Giveaways);
        
        console.log(`promiser is up on ${this.client.user.tag} @ ${new Date().toString().substr(0,31)}`);
        this.client.setMaxListeners(30)
        
        setTimeout(() => {this.client.user.setPresence({ activity: { type: 'LISTENING', name: `${Prefix}help`, url: `https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=2147483647&scope=bot`}, status: 'dnd'})}, 5000);
        setInterval(() => {this.client.user.setPresence({ activity: { type: 'WATCHING', name: `for ${Prefix}help`, url: `https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=2147483647&scope=bot`}})}, 3.6e6);
        setTimeout(() => {setInterval(() => {this.client.user.setPresence({ activity: { type: 'LISTENING', name: `${Prefix}help`, url: `https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=2147483647&scope=bot`}})}, 3.6e6)}, 3.6e6);
        
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
