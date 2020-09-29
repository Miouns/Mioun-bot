const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
    
    let user = message.mentions.users.first()
    if(!user) user = args[0]
    
    if (!client.config.owners.includes(message.author.id)  || !message.member.hasPermission('ADMINISTRATOR')) return message.reply("you do not have perms to use this command, Only The Owner Of The Bot Have Access")
    
    if(args[1] === "all") {
      let bal = db.get(`account.${user.id}.balance`)
      db.subtract(`account.${user.id}.balance, bal`)
      
      let embed = new Discord.MessageEmbed()
      .setDescription(`Succesfully remove all money from <@{user.id}>`)
      .setThumbnail(user.displayAvatarURL())
      message.channel.send(embed);
      
      return;
    }
  
     db.subtract(`account.${user.id}.balance`, args[1])
        if (!args[1]) return message.reply('Please specify an amount to Remove.')
    if (message.content.includes('-')) { // if the message includes "-" do this.
        return message.channel.send('Negative money can not be Removed.')
    }

    message.channel.send('Successfully Removed ' + args[1] + ' to ' + args[0])
     

    
    
    
    
  }

exports.help = {
  name: "removemoney",
  description: "remove money From Specific User"
}

exports.conf = {
  aliases: ["rm"],
  cooldown: 3
}