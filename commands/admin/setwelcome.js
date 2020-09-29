const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  const welcome = args.join(" ");

  if(!welcome) return message.say('sorry, you have to enter the channel id')

  let checkID = message.guild.channels.cache.get(welcome);
  if(!checkID) return message.say('channel not found 404')
  db.set(`welcome.${message.guild.id}`, welcome);

  message.say(`Succesfully set Welcome Channel <#${welcome}>`)
}

exports.help = {
  name: "setwelcome",
  description: "Set a welcome Channel",
  usage: "setwelcome <idChannel>",
  example: "setwelcome 729234184249540699"
}

exports.conf = {
  aliases: ["setwc"],
  cooldown: 5

}
