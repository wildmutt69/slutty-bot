export default {
    name: 'exit',
    run(code, client) {
        client.user.setActivity('restarting. . .', { type: 'WATCHING' });
        console.log(`\x1b[1;38;2;255;0;0mProcess ${process.pid} about to exit with code: ${code}\x1b[0m`);
    }
};
