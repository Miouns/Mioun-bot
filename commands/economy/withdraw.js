const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let jum = args[0];
    
  let bal = db.get(`account.${message.author.id}.bank`)
  
  if(bal < jum) return message.channel.send("You don't have enough money in bank to Withdraw!")
  

  // db.set(`account.${message.author.id}.balance`);
  // db.add(`account.${message.author.id}.balance`, jum);
  // db.subtract(`account.${message.author.id}.bank`, jum);
  
  if(jum === "all") {
    
    let msg = await message.channel.send('withdraw all you\'re money from Bank... <a:loading:745212277309046854>')
    
     db.add(`account.${message.author.id}.balance`, bal)
     db.subtract(`account.${message.author.id}.bank`, bal);
    
    setTimeout(() => {
      msg.edit(`<:success:733601079887134762> | Succesfully Withdraw your all money from bank\n**Amount: ${jum}**`);
      // message.channel.send(`Now you have **${bankBal}** in your Bank`)
     
    }, 4000)
    
    
    
    // return true;
  } else {
    let msgs = await message.channel.send("withdraw you're money from Bank... <a:loading:745212277309046854>");
    // msg.edits('')
  
    // let bankBal = db.get(`account.${message.author.id}.bank`)
  
    setTimeout(() => {
    msgs.edit(`<:success:733601079887134762> | Succesfully Withdraw your money from bank\n**Amount: ${jum}**`);
    // message.channel.send(`Now you have **${bankBal}** in your Bank`)
    db.add(`account.${message.author.id}.balance`, jum);
    db.subtract(`account.${message.author.id}.bank`, jum);
    }, 4000)
  
  }
}

exports.help = {
  name: "withdraw",
  description: "withdraw your Money in Bank",
  usage: "withdraw <amount>",
  example: "mi.withdraw 10"
}

exports.conf = {
  aliases: ["wt", "with"],
  cooldown: 2
}