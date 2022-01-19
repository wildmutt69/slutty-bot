export default {
    name: 'searchNoResult',
    async run(message, querry) {
        message.channel.send(`No result found for ${query}!`);
    }
};
