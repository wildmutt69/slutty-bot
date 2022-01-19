export default {
	
  customId: 'tickButton',

	label: '☑️',
	
  style: 'SUCCESS',

	async run(interaction) {
    
		await interaction.followUp('☑️')
	}
}