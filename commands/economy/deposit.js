const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let jum = args.join(0);
  
  
  db.subtract(`account.${message.author.id}.balance`, jum);
  let bal = db.get(`account.${message.author.id}.balance`)
  
  if(bal < jum) return message.channel.send("You don't have enough money to put in the bank!")
  
  let msg = await message.channel.send("Saving money in the Bank... <a:loading:745212277309046854>");
  // msg.edits('')
  
  db.add(`account.${message.author.id}.bank`, jum);
  let bankBal = db.get(`account.${message.author.id}.bank`)
  // db.add(`account.${message.author.id}.bank`, jum);
  setTimeout(() => {
  msg.edit(`deposit your money in the bank\n**Amount: ${jum}**`);
  message.channel.send(`Now you have **${bankBal}** in your Bank`)
  }, 4000)
  
  // db.set(`account.${message.author.id}.bank`);
  
  
}

exports.help = {
  name: "deposit",
  description: "deposit your Money in Bank",
  usage: "deposit <amount>",
  example: "mi.deposit 10"
}

exports.conf = {
  aliases: ["dp", "dep"],
  cooldown: 2
}
