import { Message, MessageEmbed } from 'discord.js'
import { IsekoClient } from '../../classes/IsekoClient.js'

export default {
	name: 'help',

	async run({	message, client	}: { message: Message, client: IsekoClient }) {
		const
		  commands = client.commands,
		  embed = client.components.embeds.get('helpEmbed_data') as MessageEmbed
		embed.description = `**\`\`\`fix\npinging. . .\`\`\`**`
    message.channel.send({
			embeds: [embed]
		})
    console.log(commands)//
	}
}