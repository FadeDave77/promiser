import { Message, MessageEmbed, MessageReaction, User } from 'discord.js';
import { Repository } from 'typeorm';
import { Giveaways } from '../../models/giveaways';
import { endianness } from 'os';

export default {
    async end(giveawayRepo: Repository<Giveaways>, msg: Message) {
        await msg.fetch();
        giveawayRepo.delete({ message: msg.id});

        const reaction: MessageReaction = await msg.reactions.cache.filter(r => r.emoji.name === '🎉').first().fetch();
        await reaction.users.fetch();
        const winner: User = reaction.users.cache.filter(w => !w.bot).random();

        const item = msg.embeds[0].author.name.split('| ').slice(1)
        const embed: MessageEmbed = msg.embeds[0];
        embed.setFooter('Giveaway has ended.')
        .setColor(0xff0000)
        .addField('Winner:', winner ? `${winner} (${winner.tag})` : 'No winners :cry:');
        msg.edit(embed);

        if (winner) msg.channel.send(`Giveaway has ended for the item **${item}**, the winner is: ${winner} (${winner.tag})`)
    }
}
