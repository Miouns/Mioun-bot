const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../../config.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.channel.send("You need to mention someone to kiss them");
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} kissed ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    .setFooter(`Syve X Syrup`);
    message.channel.send({embed})
};

exports.help = {
    name: 'kiss',
    description: 'Kisses someone OwO',
    usage: 'kiss <user>'
  };

exports.conf = {
    aliases: [],
    ccoldown: 3
  };