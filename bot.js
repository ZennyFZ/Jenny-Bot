const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./Setting/config.json');

const bot = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

bot.on("ready", () => {
  setInterval( () => {
  let activityTypes = config.status1
  const activities_list = config.status2
  let randomType = activityTypes[Math.floor((Math.random()*activityTypes.length))]
  const randomName = Math.floor(Math.random() * (activities_list.length - 1) + 1);
  bot.user.setActivity(activities_list[randomName],{type: randomType })
}, config.time);
  console.log(`${bot.user.username} is online`);
})

bot.on("messageCreate", async (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith(config.prefix)) {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if(command === "awake") {
            message.channel.send("Mèo xanh đã awakened 2")
        }
    } //testing
})

bot.login(config.token)