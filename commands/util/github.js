const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const superagent = require('superagent');
const fetch = require('node-superfetch');

exports.help = {
  name: "github",
  aliases: ["git"],
  usage: "github <Name>",
  exmaple: "github mioun",
  description: `Github User Account Information!`
}

exports.run = async (client, message, args) => {
  let user = encodeURI(args.join(" "));

  if (!user) return message.say("You will need to enter a github username!");

  fetch.get(`https://api.github.com/users/${user}`).then(res => {
    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio, blog, company, email } = res.body;

    let embed = new MessageEmbed()
      .setAuthor(login)
      .setThumbnail(avatar_url)
      .addField('Status: ', bio || 'No Status')
      .addField('Blog: ', blog || 'No Blog')
      .addField('Location: ', location || 'No Location')
      .addFields(
        {
          name: "Created at: ", 
          value: moment.utc(created_at).format("DD, MM, YYYY | hh:mm:ss"), 
          inline: false
        },
        {
          name: "email: ",
          value: email || 'No email',
          inline: false,
        },
        {  
          name: 'company: ',
          value: company || 'No Company',
          inline: false,
        },
        {
          name: 'Followers: ',
          value: followers || 'No Followers',
          inline: false,
        },
        {
          name: 'Following: ',
          value: following || 'No Following',
          inline: false,
        },
        {
          name: 'Public Repos: ',
          value: public_repos || 'No Repos',
          inline: false
        },
        {
          name: 'Name: ',
          value: name || 'No Name',
          inline: false
        }
      )
      .setImage(avatar_url)
      .setURL(html_url);

    message.say(embed);
  });
}


exports.conf = {
  aliases: ['git'],
  cooldown: 3
}
