const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
    // simple work command
    let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number.
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}, it payed off!`, `${message.author.displayAvatarURL()}`) 
    .setDescription(`${message.author}, you've worked and earned ${amount}$ !`)
    .setColor("RANDOM")
    
    message.channel.send(embed)
    db.add(`account.${message.author.id}.balance`, amount)


}

exports.help = {
  name: "work",
  description: "Work to earn Money"
}

exports.conf = {
  aliases: ["w"],
  cooldown: 1
}