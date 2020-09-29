const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (message, client, args) => {
  const lang = client.lang.find(n => n === "indo.yml");
  
  let afk = args.slice(0).join(" ");
  
  db.set(`afk.${message.author.id}`, afk);
  
  message.channel.send()
}

exports.help = {
  name: "afk",
  description: ""
}

exports.conf = {
  aliases: [],
  cooldown: 15
}