import { Message, MessageEmbed } from 'discord.js'
import { IsekoClient } from '../../classes/IsekoClient.js'

export default {
	name: 'guilds',
	alias: ['servers'],

	async run({	message, client	}: { message: Message, client: IsekoClient }) {
		/*const embed = message.client.embeds.get('emptyEmbed_data')
		const guilds = await message.client.guilds.cache
		embed.description = `**\`\`\`fix\npinging. . .\`\`\`**`
    message.reply({
			embeds: [embed]
		})*/
		console.log(await message.client.guilds.cache)
	}
}