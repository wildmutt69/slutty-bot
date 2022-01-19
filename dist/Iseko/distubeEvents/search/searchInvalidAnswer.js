export default {
    name: 'searchInvalidAnswer',
    async run(message, answer, querry) {
        message.channel.send(`${answer} is not a number.`);
    }
};
