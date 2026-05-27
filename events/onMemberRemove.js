const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildMemberRemove,
    once: false,
    async execute(member) {
        console.log(`➖👥 ${member.user.username}`);
        const targetChannel = await msg.client.channels.fetch(process.env.MBR_RM);
    },
};