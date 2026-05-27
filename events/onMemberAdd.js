const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    async execute(member) {
        console.log(`➕👥 ${member.user.username}`);
        const targetChannel = await msg.client.channels.fetch(process.env.MBR_ADD);
        const embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle('➕💬 Message envoyé')
            .setAuthor({ name: `${msg.author.displayName} (${msg.author.username})`, iconURL: msg.author.avatarURL(), url: `https://discord.com/users/${msg.author.id}` })
            .setDescription(msg.content)
            .addFields(
                { name: 'Créé', value: ' <t:' + Math.floor(msg.createdTimestamp / 1000) + ':R>.', inline: true },
                { name: 'Est un poll:', value: msg.poll ? "Oui." : "Non.", inline: true },
                { name: 'À un thread:', value: msg.hasThread ? "Oui." : "Non.", inline: true },
                { name: 'ID', value: `[${msg.id}](${msg.url})`, inline: true },
                { name: 'Envoyé dans', value: '<#' + msg.channelId + '> (' + msg.channel.name + ')', inline: true },
            )
            .setTimestamp()
        await targetChannel.send({
            embeds: [embed]
        });
    },
};