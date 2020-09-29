// const Discord = require('discord.js'),
//     db = require("quick.db");
const Discord = require("discord.js");
const config = require("../../config.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  /*
  let data = db.get(`snipe.${message.guild.id}`);
  if (!data) return message.channel.send("I don't see any stored deleted message here.");
  
  let content = data.content,
      user = data.user,
      channel = data.channel;
  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setTitle("Sniped Message")
  .setDescription(`I got a deleted message from <@${user}> in <#${channel}> \n> ${content}`)
  message.channel.send(embed);
  */
  
  const msg = client.snipes.get(message.channel.id)
    if(msg === undefined) return message.channel.send("There are no deleted messages in this channel!")
    const embed = new Discord.MessageEmbed()
    .setTitle("I got deleted message!")
    .setAuthor(`Author: ${msg.author}`)
    .setDescription(`Content: \n\`\`\`\n${msg.content}\n\`\`\``)
    if(msg.image) embed.setImage(msg.image)
    
    message.channel.send(embed)
  
}

exports.help = {
  name: "snipe",
  description: "Shows the last deleted message.",
  usage: "snipe",
  example: "mi.snipe"
};

exports.conf = {
  aliases: [],
  cooldown: 10
}
