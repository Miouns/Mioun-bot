const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Menu } = require('discord.js-menu');

exports.run = async (client, message, args) => {
const { body: batik } = await client.snek.get(`http://batikita.herokuapp.com/index.php/batik/all`)
let i = Math.floor(Math.random() * batik.hasil.length);

const { nama_batik, harga_tinggi, harga_rendah, link_batik, makna_batik, daerah_batik } = batik.hasil[i];

const embed = new MessageEmbed()
.setTitle(nama_batik)
.setDescription(makna_batik)
.setImage(link_batik)
.setURL(link_batik)
.addField('Daerah Batik: ', daerah_batik)
.setFooter(`RP ${harga_tinggi.toLocaleString()} - RP ${harga_rendah.toLocaleString()}`)

message.say(embed);
}

exports.help = {
  name: "batik",
  description: "Random Batik",
  usage: "batik",
  example: "batik"
}

exports.conf = {
  aliases: [],
  cooldown: 5
}
