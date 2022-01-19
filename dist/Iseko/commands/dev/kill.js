export default {
    name: 'kill',
    alias: ['exit', 'die', 'sleep', 'off', 'offline'],
    async run({ message, client }) {
        const embed = client.components.embeds.get('emptyEmbed_data');
        embed.description = `**\`\`\`ts\n{ killing: process(${process.pid}) {} }\`\`\`**`;
        await message.reply({
            embeds: [embed]
        });
        process.exit();
    }
};
