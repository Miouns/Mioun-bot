const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const auth = process.env.URL_KEY

exports.run = async (client, message, args) => {
  let url = args[0];
  
  if(!url) return message.channel.send("give me a url!");

  
  // if(!url.includes('https://')) url = 'https://' + url.join(' ')
  
  message.channel.send({ 
    files: [{ 
      attachment: `https://allvzx.glitch.me/api/webshot?url=${url}`, 
      name: `screenshot_${message.author.username}.png`
    }]
  });
}

exports.help = {
  name: "screenshot",
  description: "screenshot a web from url",
  usage: "screenshot <url>",
  example: "screenshot https://google.com"
}

exports.conf = {
  aliases: ["ss"],
  cooldown: 3
}