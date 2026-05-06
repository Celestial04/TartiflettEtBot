const { Events } = require('discord.js');
const moment = require('moment')

module.exports = {
    name: Events.MessageUpdate,
    once: false,
    async execute(oldMsg, newMsg) {
        if (oldMsg.author.bot === false) {
            console.log(`➖💬 ${oldMsg.author.username} → ${oldMsg.channel.name}: "${oldMsg.content}" 🔁 "${newMsg.content}" [${moment().format(('MMMM Do YYYY, h:mm:ss a'))}]`);
            const targetChannel = await oldMsg.client.channels.fetch(oldMsg.channel.id);
            await targetChannel.send(`"${oldMsg.content}" en "${newMsg.content}"`);
        } else {
            console.log(`❗🤖 ${oldMsg.author.username} est un bot, inutile de log.`)
        }
    },
};