export default {
    name: 'help',
    async run({ message, client }) {
        const commands = client.commands, embed = client.components.embeds.get('helpEmbed_data');
        embed.description = `**\`\`\`fix\npinging. . .\`\`\`**`;
        message.channel.send({
            embeds: [embed]
        });
        console.log(commands); //
    }
};
