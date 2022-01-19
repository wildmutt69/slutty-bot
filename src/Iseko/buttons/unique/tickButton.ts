import { ButtonInteraction } from 'discord.js'

export default {
	
  customId: 'tickButton',

	label: '☑️',
	
  style: 'SUCCESS',

	async run(interaction: ButtonInteraction) {
    
		await interaction.followUp('☑️')
	}
}