const { Events, Guild, GuildMemberManager, GuildManager } = require('discord.js');

module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    execute(member) {
        console.log(`➕👥 ${member.user.username}`);
    },
};