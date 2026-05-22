const { Events, EmbedBuilder } = require('discord.js');
const moment = require('moment')

module.exports = {
    name: Events.MessageReactionRemove,
    once: false,
    async execute(msgReact, User, msgReactDetails) {

            console.log(msgReact.emoji)
        if (msgReact.message.author.bot === false) {
            console.log(`➖💬 ${User.name} → ${msgReact.message.channel.name}: "${msgReact.message.content}" "${msgReact.message.content}" [${moment().format(('MMMM Do YYYY, h:mm:ss a'))}]`);
            const targetChannel = await msgReact.client.channels.fetch('1504030484752240823');
            const embed = new EmbedBuilder()
                .setColor("Red")
                .setTitle('🥺➖ Réaction retiré')
                .setAuthor({ name: msgReact.message.author.username, iconURL: msgReact.message.author.avatarURL(), url: 'https://discord.com/users/' + msgReact.message.author.id })
                .setDescription(msgReact.emoji.name + ' à été retiré par <@' + User.id + '> sur le message de <@' + msgReact.message.author.id + '> disant:\n' + msgReact.message.content)
                .setThumbnail('https://i.imgur.com/AfFp7pu.png')
                .addFields(
                    { name: 'Créé', value: ' <t:' + msgReact.emoji.createdTimestamp + ':R>.', inline: true },
                    msgReact? { name: 'ID du message', value: msgReact.message.id, inline: true } : { name: 'ID', value: msgReact.id, inline: true },
                    { name: 'Retiré dans', value: '<#' + msgReact.message.channelId + '> (' + msgReact.message.channel.name + ')', inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

            await targetChannel.send({
                embeds: [embed]
            });
            console.log('Message déreacté')
        } else {
            console.log(`❗🤖 ${msgReact.message.author.username} est un bot, inutile de log.`)
        }
    },
};