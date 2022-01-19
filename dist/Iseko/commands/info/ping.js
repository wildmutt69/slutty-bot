export default {
    name: 'ping',
    alias: ['speed'],
    async run({ message, client }) {
        const embed = client.components.embeds.get('emptyEmbed_data');
        embed.description = `**\`\`\`fix\npinging. . .\`\`\`**`;
        const msg = await message.reply({
            embeds: [embed]
        });
        embed.description = `**\`\`\`js\n{\n  ping: {\n    bot: '${msg.createdTimestamp - message.createdTimestamp}ms',\n    api: '${message.client.ws.ping}ms'\n  }\n}\`\`\`**`;
        msg.edit({
            embeds: [embed]
        });
    }
};
