export default {
    name: 'guilds',
    alias: ['servers'],
    async run({ message, client }) {
        const embed = client.components.embeds.get('emptyEmbed_data');
        const guilds = await client.guilds.cache;
        embed.description = `**\`\`\`fix\npinging. . .\`\`\`**`;
        message.reply({
            embeds: [embed]
        });
        console.log(guilds);
    }
};
