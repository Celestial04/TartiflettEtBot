const { Events } = require('discord.js');
const moment = require('moment')

module.exports = {
    name: Events.MessageDelete,
    once: false,
    execute(msg) {
        console.log(`➖💬 ${msg.author.username} → ${msg.channel.name}: ${msg.content} [${moment().format(('MMMM Do YYYY, h:mm:ss a'))}]`);
        channel.
    },
};