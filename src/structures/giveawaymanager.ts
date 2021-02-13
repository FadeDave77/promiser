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
        if (reaction.users.cache.filter(w => !w.bot).array().length < winamount) winamount=reaction.users.cache.filter(w => !w.bot).array().length;
        const winnera = reaction.users.cache.filter(w => !w.bot).random(winamount).map(u=> `<@${u.id}>`);
        const winners = winnera.toString();

        const embed: MessageEmbed = msg.embeds[0];
        embed.setFooter('Giveaway has ended.')
        .setColor(0xff0000)
        .addField(winnera.length == 1 ? 'Winner:' : 'Winners:', winners ? winners : 'No winners :pensive:')
        .setDescription(`<@${entry.from}> was giving away **${entry.item}**.`);
        msg.edit(embed);

        if (winners) msg.channel.send(`Giveaway has ended for the item **${entry.item}** from **<@${entry.from}>**, ${winnera.length == 1 ? `the winner is: ${winners}.` : `the winners are: ${winners}.`} https://discord.com/channels/${msg.guild.id}/${entry.channel}/${entry.message}`)
        giveawayRepo.delete({ message: msg.id});
    }
}
