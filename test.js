"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var client = new discord_js_1.Client({
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES'],
    ws: {
        properties: {
            $browser: 'Discord iOS'
        }
    }
});
var names = ['a', 'b'];
var n = 0;
var p = function () {
    if (n == names.length)
        n = 0;
    var name = names[n];
    return name;
    n++;
};
p();
