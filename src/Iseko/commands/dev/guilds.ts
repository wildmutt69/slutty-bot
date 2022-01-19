import { Message, MessageEmbed } from 'discord.js'
import { IsekoClient } from '../../classes/IsekoClient.js'

export default {
	name: 'guilds',
	alias: ['servers'],

	async run({	message, client	}: { message: Message, client: IsekoClient }) {
		const embed = client.components.embeds.get('emptyEmbed_data') as MessageEmbed
		const guilds = await client.guilds.cache
		embed.description = `**\`\`\`fix\npinging. . .\`\`\`**`
    message.reply({
			embeds: [embed]
		})
		console.log(guilds)
	}
}