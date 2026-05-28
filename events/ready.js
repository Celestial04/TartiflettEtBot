const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`✅🤖 Loggé tant que ${client.user.tag}.`);
	},
};