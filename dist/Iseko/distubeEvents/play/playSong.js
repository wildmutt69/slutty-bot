export default {
    name: 'playSong',
    async run(queue, song) {
        const { textChannel } = queue;
        textChannel.send(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`);
        textChannel.messages.fetch(queue.textChannel.client.distube.ids[0]).then(msg => {
            msg.delete();
            queue.textChannel.client.distube.ids = [];
            console.log(queue.textChannel.client.distube.ids);
        });
    },
};
