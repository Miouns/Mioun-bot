const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let batas = 50;
  
  if(args[0] > 50) return message.channel.send("50 or more loop message not allowed!");
  
  if(!args[0]) return message.channel.send("input a spesific Number!");
  if(!args[0]) return message.channel.send("input a Message");
  
  if(args[0] === "@everyone" || args[1] === "@here") return message.channel.send("Nope.");
  setTimeout(() => {
for(let i=0; i<args[0]; i++) {
    message.channel.send(args.splice(1).join(" "));
};
  }, 3000);
  
 const msg = await message.channel.send("loop has executed Succesfully! <a:succes:735371477100265504>");
 msg.delete({ timeout: 2000 });
}

exports.help = {
  name: "loop",
  description: "loop a message",
  usage: "loop <amount> \"<message>\" use \"\" if yout message has 2 or more",
  example: ""
}

exports.conf = {
  aliases: ["lp"],
  cooldown: 10
}
