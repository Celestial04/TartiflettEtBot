const { Events, EmbedBuilder } = require('discord.js');
const moment = require('moment')

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(msg) {
        if (msg.author.bot === false) {
            console.log(`➕💬 ${msg.author.username} → ${msg.channel.name}: ${msg.content} [${moment().format(('MMMM Do YYYY, h:mm:ss a'))}]`);
            const targetChannel = await msg.client.channels.fetch('1503125090815185017');
            const embed = new EmbedBuilder()
                .setColor("Green")
                .setTitle('➕💬 Message envoyé')
                .setAuthor({ name: msg.author.username, iconURL: msg.author.avatarURL(), url: 'https://discord.com/users/' + msg.author.id })
                .setDescription(msg.toString())
                
                .addFields(
                    { name: 'Créé', value: ' <t:' + Math.floor(Date.now() / 1000) + ':R>.', inline: true },
                    { name: 'ID', value: msg.id, inline: true },
                    { name: 'Envoyé dans', value: '<#' + msg.channelId + '> (' + msg.channel.name + ')', inline: true },
                )
                .setTimestamp()
                

                await targetChannel.send({
                    embeds: [embed]
                });
        } else {
            console.log(`❗🤖 ${msg.author.username} est un bot, inutile de log.`)
        }
    },
};