const { Schema, model } = require('mongoose');

const Discord = require('discord.js');
const client = new Discord.Client();

const Guild = Schema({
  id: String,
  prefix: {
   default: "mi.",
   type: String
  }
})