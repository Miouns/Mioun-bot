const Discord = require("discord.js");
// const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if(message.content === "@everyone" || message.content === "@here") return message.channel.send('I don\'t wanna do this')
   
    if(message.guild === null)return;

  
    if (message.author.bot) return;

  const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
message.channel.send(sayMessage);
          

};
exports.help = {
  name: "say",
  description: "only dev k",
  usage: "say <text>",
  example: "mi.say hi"
}

exports.conf = {
  aliases: ["sy"],
  cooldown: 3
}
