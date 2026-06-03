const { Events } = require('discord.js');
const express = require('express');
const app = express();

async function getUserPresence(client, userId) {
	for (const guild of client.guilds.cache.values()) {
		const member = await guild.members.fetch(userId).catch(() => null);
		if (member?.presence) {
			return {
				guildId: guild.id,
				status: member.presence.status,
				activities: member.presence.activities.map(activity => ({
					name: activity.name,
					type: activity.type,
					details: activity.details,
					state: activity.state,
					url: activity.url,
				})),
			};
		}
	}
	return null;
}

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		app.get('/user/:id', async (req, res) => {
			const userId = req.params.id;
			try {
				const user = await client.users.fetch(userId);
				const presence = await getUserPresence(client, userId);
				res.json({
					id: user.id,
					username: user.username,
					discriminator: user.discriminator,
					avatarURL: user.avatarURL(),
					createdAt: user.createdAt,
					bot: user.bot,
					presence,
				});
			} catch (error) {
				res.status(404).json({ error: 'Pas trouvé ;w;' });
			}
		});
		app.listen(process.env.PORT || 1337, () => {
			console.log('API sur http://localhost:' + (process.env.PORT || 1337));
		});

		console.log(`✅🤖 Loggé tant que ${client.user.tag}.`);
		client.user.setPresence({ activities: [{ type: 4, name: '*rires*' }], status: 'idle' });
	},
};
