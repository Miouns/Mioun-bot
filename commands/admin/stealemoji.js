const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!msg.member.hasPermission(`MANAGE_EMOJIS`)) {
      return msg.channel.send(`You Don't Have Permission To Use This Command! Manage Emojis`)
    }
  
  const emoji = args[1];
    if (!emoji) return msg.channel.send(`Please Give Me A Emoji!`);

    
  let customemoji = Discord.Util.parseEmoji(emoji);
  const Color = `RANDOM`;

    
  const Link = `${args[1]}`;
  const name = args.slice(2).join(" ");
    
  if(!name) return msg.reply(`Correct usage is ${PREFIX}stealemoji Link name`)
    
    
  let CheckEmoji = parse(emoji, { assetType: "png" });
  if (!CheckEmoji[1])
    return msg.channel.send("give me a name of emoji!");
      msg.channel.send(
        `You Can Use Normal Emoji Without Adding In Server!`
      );
    
    
      msg.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new Discord.MessageEmbed()
        .setTitle(`Emoji Added`)
        .setColor(`${Color}`)
        .setDescription(
          `Emoji Has Been Added! | Name : ${name || `${customemoji.name}`} | Preview : [Click Me](${Link})`
        );
  return msg.channel.send(Added);
}

exports.help = {
  name: "stealemoji",
  description: "add emoji for this guild",
  usage: "stealemoji <link> <name>",
  example: "stealemoji https://example.com/example.png example"
}

exports.conf = {
  aliases: ["addemoji"],
  cooldown: 3
}