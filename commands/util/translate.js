const Discord = require('discord.js');
const translate = require('@vitalets/google-translate-api');

exports.run = async (client, message, args) => {
  let lang = args[0];
  let kata = args.splice(1).join(" ").split(" ", 2);
  let toLang = args[2];
  
  const embed = new Discord.MessageEmbed();
  
  if (!lang) return message.channel.send("enter the language of the word you entered, example en");
  if(!kata) return message.channel.send("enter the words");
  if(lang === "auto") {
    translate(kata, { to: toLang}).then(has => {
      const hasil = embed.addField("Result: ", has.text)
      embed.addField("Did you Mean: ", has.from.text.value)
      .setfooter(`translate from **${has.from.language.iso}** to **${has.to.language.iso}**`)
      message.channel.send(hasil)
      return
    })
  }
  if(toLang === "auto") {
    translate(kata, {from: lang}).then(has => {
     const hasil = embed.addField("Result: ", has.text)
       embed.addField("Did you Mean: ", has.from.text.value)
      .setfooter(`translate from **${has.from.language.iso}** to **${has.to.language.iso}**`)
      message.channel.send(hasil)
    })
    return
  }
  translate(kata, { to: toLang, from: lang}).then(has => {
     const hasil = embed.addField("Result: ", has.text)
      embed.addField("Did you Mean: ", has.from.text.value)
      .setfooter(`translate from **${has.from.language.iso}** to **${has.to.language.iso}**`)
      message.channel.send(hasil)
  })
}

exports.help = {
  name: "translate",
  description: "translate the words from your input",
  usage: "translate <from en|id|auto> <words> <to en|id|auto>",
  example: "translate en hello id"
}

exports.conf = {
  aliases: ["tr"],
  cooldown: 3
}