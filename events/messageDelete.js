// This system requires a database.
const db = require("quick.db"); // v7.1.1

module.exports = async (client, message) => {
  client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})
}
