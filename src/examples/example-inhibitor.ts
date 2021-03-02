import { Inhibitor } from 'discord-akairo';
import { Message } from 'discord.js';

export default class /* name */ extends Inhibitor {
    public constructor() {
        super('', {
            reason: ''
        })
    }
	
    public exec(message: Message) {
    
        return true;
    }
}
