const {Client, Collection} = require("discord.js");
const { CommandoClient } = require('discord.js-commando');
const fs = require('fs');
const { AkairoClient } = require('discord-akairo');

module.exports = class MiounBot extends AkairoClient {
  constructor(options) {
    super(options)
    

    this.commands = new Collection(); // This will store your commands.
    this.cooldowns = new Collection(); // This will store your commands with cooldowns.
    this.aliases = new Collection(); // This will store your alternative commands. Example = /server -> /serverinfo, /guild, /guildinfo
    this.config = require('../config.json');
    this.recent = new Set();
    this.snek = require('node-superfetch');
    this.blacklist = require('quick.db').fetch("blacklist");
    this.snipes = new Map();
    this.lang = fs.readdirSync('lang');
  }
}
