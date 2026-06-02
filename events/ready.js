const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`✅🤖 Loggé tant que ${client.user.tag}.`);
		client.user.setPresence({ activities: [{ type: 4, name: '*rires*' }], status: 'idle' });
	},
};