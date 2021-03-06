const Discord = require('discord.js');
const { prefix } = require('../../config.json');
const colors = require('colors');

colors.setTheme({
  error: "red"
});

exports.run = async (client, msg) => {
if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.channel.send("You dont have Permission `MANAGE_MESSAGE`")
if(!msg.guild.me.hasPermission('MANAGE_MESSAGES')) return msg.channel.send("I dont have Permission `MANAGE_MESSAGE`")
const args = msg.content.split(' ').slice(1); // All arguments behind the command name with the prefix
const amount = args.join(' '); // Amount of messages which should be deleted

if (!amount) return msg.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
if (isNaN(amount)) return msg.reply('The amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error

if (amount > 100) return msg.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
if (amount < 1) return msg.reply('You have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1
await msg.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
    msg.channel.bulkDelete(messages)
  
});

let mess = await msg.channel.send(`Succesfully clear ${args[0]} Message`);

msg.channel.messages.cache.get(mess.id).delete({ timeout: 5000 })

}

exports.help = {
  name: "clear",
  description: "Clear a message",
  usage: "clear <amount_message>",
  example: `${prefix}clear 5 / prune 6`
}

exports.conf = {
  aliases: ["cl", "prune"],
  cooldown: 2
}