const Discord = require("discord.js");
const config = require("../../config.json");
const db = require("quick.db");

exports.help = {
  name: "blacklist",
  aliases: ["bl"],
  category: "owner",
  usage: "blacklist <@user> / blacklist <userid>",
  description: "Blacklist somebody from the bot!"
};
exports.run = async (client, message, args) => {

  if (message.author.id != config.owners[0] && message.author.id != config.owner[1])
    return message.reply("only Owner can use this command!");
  let user = message.mentions.users.first() || args[0];
  let blacklist = await db.fetch(`blacklist.${user.id}`);


//   let typeUser = typeof user;
  db.set(`blacklist.${user.id}`, "Blacklisted");
  if(user.id === client.config.owners[0] || user === client.config.owners[0]) return message.channel.send("You do not Blacklisted a **Owner**")
  if(!user.id) {
  let embed = new Discord.MessageEmbed()
  .setDescription(`${user} has been blacklisted!`);
  message.channel.send(embed)
  } else {
  let embed = new Discord.MessageEmbed()
  .setDescription(`${user} has been blacklisted!`);
  message.channel.send(embed)
  }

};

exports.conf = {
  aliases: ["bl"],
  cooldown: 3
};
