const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    async execute(member) {
        console.log(`➕👥 ${member.user.username}`);
        const targetChannel = await member.client.channels.fetch(process.env.MBR_ADD);
        const embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle('➕👥 à rejoint')
            .setAuthor({ name: `${member.user.displayName} (${member.user.username})`, iconURL: member.user.avatarURL(), url: `https://discord.com/users/${member.user.id}` })
            .addFields(
                { name: 'Rejoint', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, inline: true },
                { name: 'Bot?', value: `${member.bot? "Oui." : "Non."}`, inline: true },
                { name: 'Créé', value: `<t:${Math.floor(member.createdTimestamp / 1000)}:R>`, inline: true },
                { name: 'Avatar', value: `[Lien](${member.displayAvatarURL()})`, inline: true },
                { name: 'ID', value: `[${member.id}](${member.id})`, inline: true },
            )
            .setTimestamp()
        await targetChannel.send({
            content: `<@${member.id}>`,
            embeds: [embed]
        });
    },
};