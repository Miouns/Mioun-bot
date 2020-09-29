const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let jum = Math.floor(Math.random() * 1000) + 1 // artinya 1-1000 
  let org = message.mentions.users.first();
  
  
  // if(db.get(`${org}`))
  
  
  if(typeof args[0] === "number") org = args[0];
  

  
  // db.subtract(`account.${org}.balance`, jum)
  // db.add(`account.${message.author.id}.balance`, jum);
  
  
  
  
  if(typeof args[0] === "number") {
    if(db.get(`account.${org}.balance`) <= 0) return message.channel.send("This user don't have a Money")
    if(message.guild.members.cache.get(org).user.bot) return message.channel.send("This user is a Bot!"); //|| message.guild.members.cache.get(org).user.bot) return message.channel.send("This user is a Bot!");
   
    db.add(`account.${message.author.id}.balance`, jum);
    db.subtract(`account.${org}.balance`, jum)
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`You rob ${message.guild.members.cache.get(org).user.tag}`)
    .setDescription("**Amount**: " + jum.toLocaleString())
    .setTimestamp()
    .setFooter(message.guild.members.cache.get(message.author.id).user.tag + " Rob " + message.guild.members.cache.get(org).user.tag );
    message.channel.send(embed);
  } else {
   if(db.get(`account.${org.id}.balance`) <= 0) return message.channel.send(`This user don't have a Money!`);
   if(org.bot) return message.channel.send("This user is a Bot!"); 
    db.subtract(`account.${org.id}.balance`, jum)
    db.add(`account.${message.author.id}.balance`, jum);
    // f(typeof args[0] === "number") {
    let embed = new Discord.MessageEmbed()
    .setTitle(`You rob ${org.tag}`)
    .setDescription("**Amount**: " + jum.toLocaleString())
    .setTimestamp()
    .setFooter(message.guild.members.cache.get(message.author.id).user.tag + " Rob " + org.tag);
    message.channel.send(embed);
  }
}
exports.help = {
  name: "rob",
  description: "Rob Money of user if their Money is not Deposited in the Bank",
  usage: "rob <user>",
  example: "mi.rob @Syrup#4506"//example: 
}

exports.conf = {
  aliases: [],
  cooldown: 3
}