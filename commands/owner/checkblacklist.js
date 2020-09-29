const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message) => {
  let user = db.get(`prefix.${message.guild.id}.user.name`);
  
  
  const embed = new Discord.MessageEmbed()
  .setDescription(``)
}

exports.help = {
  name: "checkblacklist",
  description: "check blacklist",
}

exports.conf = {
  aliases: ["checkbl"],
  cooldown: 1
}