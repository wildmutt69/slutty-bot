export default {
    name: 'interactionCreate',
    async run({ 0: interaction, client }) {
        if (interaction.isCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command)
                return;
            try {
                await interaction.deferReply(`Iseko is thinking. . .`);
                await command.run(interaction);
            }
            catch (error) {
                console.error(error);
                return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
            return;
        }
        if (interaction.isButton()) {
            const button = interaction.client.buttons.get(interaction.customId);
            try {
                await interaction.deferReply(`Iseko is thinking. . .`);
                await interaction.client.buttons.get(interaction.customId)(interaction);
            }
            catch (error) {
                console.error(error);
                return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
            return;
        }
    },
};
