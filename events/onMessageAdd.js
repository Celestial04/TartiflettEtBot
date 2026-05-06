const { Events, Client, MessageFlags, ChannelManager } = require('discord.js');
const moment = require('moment')
const client = Client

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(msg) {
        if (msg.author.bot === false) {
        console.log(`➕💬 ${msg.author.username} → ${msg.channel.name}: ${msg.content} [${moment().format(('MMMM Do YYYY, h:mm:ss a'))}]`);
        const targetChannel = await msg.client.channels.fetch(msg.channel.id);
        await targetChannel.send(msg.content);
        } else {
            console.log(`❗🤖 ${msg.author.username} est un bot, inutile de log.`)
        }
    },
};