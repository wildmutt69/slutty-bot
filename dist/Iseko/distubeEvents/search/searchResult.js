export default {
    name: 'searchResult',
    async run(message, results) {
        message.channel.send(`**Choose an option from below**\n${results.map((song, i) => `**${i + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
    },
};
