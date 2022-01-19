import { IsekoClient } from '../../classes/IsekoClient.js'

export default {

	name: 'guildCreate',
	description: 'guild joined.',

	async run({ 0: guild, client }) {
 
    const channel = await client.channels.fetch('915994612605272074')
    channel.send(`<@787263928408342548>\nJoined new guild: ${guild.name} - ${guild.id}\nmemberCount: ${guild.memberCount}\nownerId: ${guild.ownerId}`)
	},
};