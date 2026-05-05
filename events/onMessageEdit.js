const { Events } = require('discord.js');
const moment = require('moment')

module.exports = {
    name: Events.MessageUpdate,
    once: false,
    execute(oldMsg, newMsg) {
        console.log(`➖💬 ${oldMsg.author.username} → ${oldMsg.channel.name}: "${oldMsg.content}" 🔁 "${newMsg.content}" [${moment().format(('MMMM Do YYYY, h:mm:ss a'))}]`);
    },
};