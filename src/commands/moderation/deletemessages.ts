import { Command } from 'discord-akairo';
import {Message, GuildMember, MessageEmbed, ImageSize, TextChannel, MessageAttachment, User} from 'discord.js';

export default class Purge extends Command {
    public constructor() {
        super('purge', { //name
            aliases: ['purge', 'rm', 'clean', 'prune', 'delete', 'remove'], //aliases
            category: 'moderation', //category of command
            description: {
                content: 'Deletes specified amount of messages up to 999.', //description
                usage: 'rm <amount>', //how to use
                examples: ['rm 420', 'rm 19', 'rm 19 @FadeDave#7005'] //exampleArray
            },
            userPermissions: ['MANAGE_MESSAGES'],
            ratelimit: 6, //how many times can you execute / minute
            args: [
                {
                    id: 'amount',
                    type: 'number'
                },
                {
                    id: 'member',
                    type: 'member'
                }
            ]
        });
    }
    public async exec(message: Message, {amount, member}: {amount: number, member: GuildMember}): Promise<Message> {
        let channel = message.channel as TextChannel
        if (member) {
            if (amount < 1 || amount > 999 || isNaN(amount) || !amount) return message.util.send('Please provide a valid amount of messages to delete in the 1-999 range.')
            else {
                let originalamount = amount
                amount++
                while (amount>0) {
                    if (amount <= 100) {
                        await channel.messages.fetch().then(messages => messages.filter(author => author.author.id == member.user.id)).then(e=> e.firstKey(amount)).then(async messages => {
                        await channel.bulkDelete(messages);
                        if (amount < 2) await message.util.send(`Removed one message from ${member}.`);
                        if (amount >= 2) await message.util.send(`Removed ${originalamount} messages from ${member}.`);
                        let toDelete = await channel.lastMessageID;
                        setTimeout(() => {message.util.lastResponse.delete().catch(err => null); message.delete().catch(err => null)}, 5000)});
                        amount -= amount
                        continue;
                    }
                    else {
                        await channel.messages.fetch().then(messages => messages.filter(author => author.author.id == member.user.id)).then(e=> e.firstKey(100)).then(async messages => {
                        await channel.bulkDelete(messages)});
                        amount -= 100
                        continue;
                    }
                };
            }
        }
        else {
            if (amount < 1 || amount > 999 || isNaN(amount) || !amount) return message.util.send('Please provide a valid amount of messages to delete in the 1-999 range.')
            else {
                let originalamount = amount
                amount++
                while (amount>0) {
                    if (amount <= 100) {
                        await channel.messages.fetch({limit: amount}).then(async messages => {
                        await channel.bulkDelete(messages);
                        if (amount < 2) await message.util.send(`Removed one message.`);
                        if (amount >= 2) await message.util.send(`Removed ${originalamount} messages.`);
                        let toDelete = await channel.lastMessageID;
                        setTimeout(() => {message.util.lastResponse.delete().catch(err => null)}, 5000)});
                        amount -= amount
                        continue;
                    }
                    else {
                        await channel.messages.fetch({limit: 100}).then(async messages => {
                        await channel.bulkDelete(messages)});
                        amount -= 100
                        continue;
                    }
                };
            }
        }
    }
}
