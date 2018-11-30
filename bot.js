const Discord = require('discord.js');//????? ???
const client = new Discord.Client();// ????? ???????
const ms = require('ms');
const pms = require('pretty-ms');


const CodingXActivity = [
  "minecraft", //IT's Broken Here
  "PUBG",
  ];
  
client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (CodingXActivity.length - 1) + 1);
 client.user.setGame(CodingXActivity[index], "https://www.twitch.tv/CodingXArea");
  }, 10000); //10 seconds
});




client.login(process.env.BOT_TOKEN)
