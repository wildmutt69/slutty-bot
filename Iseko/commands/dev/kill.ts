import { Message, MessageEmbed } from 'discord.js'
import { IsekoClient } from '../../classes/IsekoClient.js'

export default {
	name: 'kill',
	alias: ['exit', 'die', 'sleep', 'off', 'offline'],

	async run({	message, client	}: { message: Message, client: IsekoClient }) {
    
		const embed = client.components.embeds.get('emptyEmbed_data') as MessageEmbed
		embed.description = `**\`\`\`ts\n{ killing: process(${process.pid}) {} }\`\`\`**`
		await message.reply({
			embeds: [embed]
		})
		process.exit()
	}
}