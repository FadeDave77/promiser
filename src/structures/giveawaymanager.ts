import { Message, MessageEmbed, MessageReaction, User } from 'discord.js';
import { Repository } from 'typeorm';
import { Giveaways } from '../models/giveaways';
import { endianness } from 'os';

export default {
    async end(giveawayRepo: Repository<Giveaways>, msg: Message) {
        await msg.fetch();
        const entry = await giveawayRepo.findOne({message: msg.id})
        let winamount = entry.winners
        const reaction: MessageReaction = await msg.reactions.cache.filter(r => r.emoji.name === '🎉').first().fetch();
        await reaction.users.fetch();
        if (reaction.users.cache.filter(w => !w.bot).array().length < winamount) winamount=reaction.users.cache.filter(w => !w.bot).array().length
        const winners = reaction.users.cache.filter(w => !w.bot).random(winamount).map(u=> `<@${u.id}>`).toString()

        const embed: MessageEmbed = msg.embeds[0];
        embed.setFooter('Giveaway has ended.')
        .setColor(0xff0000)
        .addField('Winners:', winners ? winners : 'No winners :pensive:');
        msg.edit(embed);

        if (winners) msg.channel.send(`Giveaway has ended for the item **${entry.item}** from **<@${entry.from}>**, the winners: ${winners}. https://discord.com/channels/${msg.guild.id}/${entry.channel}/${entry.message}`)
        giveawayRepo.delete({ message: msg.id});
    }
}
