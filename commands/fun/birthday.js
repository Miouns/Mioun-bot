const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Menu } = require('discord.js-menu');

exports.run = async (client, message, args) => {
const name = encodeURI(args[0]);
const tnggl = args.slice(1).join(" ").search('-') ? args.slice(1).join(' ') : args.slice(1).join('-');

const { body: birth } = await client.snek.get(`https://script.google.com/macros/exec?service=AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w&nama=${name}&tanggal=${tnggl}`)

const { nama, lahir, usia, ultah, zodiak } = birth.data;

const embed = new MessageEmbed()
.setTitle(nama)
.addFields(
  {
    name: "Name: ",
    value: nama,
    inline: false
  },
  {
    name: "Birthday Date: ",
    value: lahir,
    inline: false
  },
  {
    name: "Age: ",
    value: usia,
    inline: false
  },
  {
    name: "Zodiak: ",
    value: zodiak,
    inline: false
  }
)
.setFooter(`Requested By ${message.author.username}`)

message.say(embed);
}

exports.help = {
  name: "birthday",
  description: "Random Batik",
  usage: "birthday <yourname> <date>-<month>-<year>",
  example: "birthday Syrup 10-8-1997"
}

exports.conf = {
  aliases: ['birth', 'bir'],
  cooldown: 5
}