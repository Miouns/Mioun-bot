const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let start = Date.now();
  
  message.channel.send({embed: {description: "Looks like the bot is slow.", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("Ping!", message.author.avatarURL())
    .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
    .addField("Message Latency", end - start + "ms", true)
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e))
  })
}

exports.help = {
  name: "ping",
  description: "Ponged!",
  usage: "ping",
  example: "mi.ping"
};

exports.conf = {
  aliases: ["beep"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
