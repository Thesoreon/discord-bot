const commando = require("discord.js-commando");

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "kostka",
            group: "random",
            memberName: "roll",
            description: "Hrací kostka"
        });
    }

    async run(message, args) {
        const roll = Math.floor(Math.random() * 6) + 1;
        message.reply("Hodil si " + roll);
    }
}

module.exports = DiceRollCommand;