const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

if(!message.author.id === client.config.owners[0] && !message.author.id === client.config[1]) return message.channel.send("Only owner can use this Command!");

let user = message.mentions.users.first() || args[0];

db.delete(`blacklist.${user.id}`);
 if(!user.id === undefined) {
    let embed = new Discord.MessageEmbed()
    .setDescription(`${user} has been unblacklisted!`);
    message.channel.send(embed)
} else {
  let embed = new Discord.MessageEmbed()
  .setDescription(`${user} has been unblacklisted!`);
  message.channel.send(embed)
}
}

exports.help = {
  name: "unblacklist",
  description: "delete member from blacklist"
}

exports.conf = {
  aliases: ["unbl"],
  cooldown: 3
}