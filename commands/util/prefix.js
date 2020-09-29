const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if(args[0] === "default") {
    return db.delete(`prefix.${message.guild.id}`)
  }
  
  
  db.set(`prefix.${message.guild.id}`, args[0]);
  
  const prefixes = db.get(`prefix.${message.guild.id}`);
  
  
  
  let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`)
    .setTitle("Succesfully to change Prefix")
    .setFooter(`${message.author.tag} has changed prefix to ${prefixes}`)
    .setDescription(`Succesfully change Prefix to ${args[0]}`);
  message.channel.send(embed);
}
  
exports.help = {
  name: "prefix",
  description: "Change default prefix mi. to whatever you want",
  usage: "prefix <prefix>",
  example: "prefix mi!"
}

exports.conf = {
  aliases: ["ch"],
  cooldown: 3
} 