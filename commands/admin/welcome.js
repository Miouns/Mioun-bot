const Discord = require('discord.js');

exports.run = async (message, client, args) => {
      // let user = args[0];
     
      // if(user) {
      //   let name = message.guild.members.cache.find(n => n.user.username === user).catch(e => message.say(`Cannot found user with name \`${user}\``));
      //   return client.emit('guildMemberAdd', name, message);
      // }

      // let member = message.mentions.users.first();
      // if(member) {
      //   return client.emit('guildMemberAdd', member, message);
      // } 



			// client.emit('guildMemberAdd', message.member, message);
}

exports.help = {
  name: 'welcome',
  description: "Run a Fake Welcome Message",
  usage: 'welcome Syrup'
}

exports.conf = {
  aliases: ["wc"],
  cooldown: 5
}