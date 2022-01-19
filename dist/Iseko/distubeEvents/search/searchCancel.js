export default {
    name: 'searchCancel',
    async run(message, querry) {
        message.channel.send(`Searching canceled`);
    }
};
