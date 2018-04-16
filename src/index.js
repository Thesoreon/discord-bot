const discord = require("discord.js");
const commando = require("discord.js-commando");
const API_KEY = require("./config");

const bot = new commando.Client();

bot.on("ready", () => {
    bot.user.setActivity("Programming");
});

bot.on("message", (message) => {
    if(message.content == "ahoj") { 
        const temp = new discord.RichEmbed()
            .setDescription("Desc test")
            .setColor("#ff0066")
            .addField("Bot name ", bot.user.username)
            .setTimestamp();
        return message.channel.send(temp);
    }
});

// 1 - Kostka
bot.registry.registerGroup("random", "Random");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(API_KEY);
