const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const Genius = new (require("genius-lyrics")).Client(
  "aQwhTLfthLLgV273tZ8K4qYt-5a_sdlVvbrwLAjxcv_iK9S0kC1yI56sV7XCxwX2n1l-74w6L_h2pOQdO2iC0Q"
);

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send(`Please Give Me A Song Name!`);

    let Name = args.join(" ");

    Genius.tracks.search(Name).then(results => {
      const song = results[0];
      song
        .lyrics()
        .then(lyrics => {
          let embed = new MessageEmbed()
              .setColor(Color)
              .setTitle(`${song.title} Lyrics`)
              .setDescription(
                lyrics.length > 1900 ? `${lyrics.substr(0, 1900)}...` : lyrics
              )
              .setFooter(`Song Creator : ${song.artist.name}`)
              .setThumbnail(song.humbnail)
              .setTimestamp()
          message.say(embed)
        })
        .catch(err => message.channel.send(err))
    });
}

exports.help = {
  name: "lyrics",
  description: "Search lyrics"
}

exports.conf = {
  aliases: ["ly"],
  cooldown: 5
}