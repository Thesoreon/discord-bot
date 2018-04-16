const commando = require("discord.js-commando");
const API_KEY = require("./config");

const bot = new commando.Client();

bot.registry.registerGroup("random", "Random");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(API_KEY);
