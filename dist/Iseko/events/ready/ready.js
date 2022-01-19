import { joinVoiceChannel } from '@discordjs/voice';
export default {
    name: 'ready',
    once: true,
    async run({ client }) {
        console.log(`\x1b[1;38;2;141;101;197m${client.user.tag} logged in 💜.\x1b[0m`);
        console.log(`Ready in ${client.readyTimestamp - client.runAt}ms.`);
        const joinVc = async () => {
            const channel = client.channels.cache.get('918754600826318849');
            joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                //temp fix for ts error until fixed.
                adapterCreator: channel.guild.voiceAdapterCreator,
                selfMute: false,
                selfDeaf: false,
            });
        };
        try {
            await joinVc();
            console.log('Successfully joined vc.');
        }
        catch (err) {
            console.log(err);
        }
        const { default: presence } = await import('../../functions/presence.js');
        presence(client);
        const channel = client.channels.cache.get('919092270190461039');
        channel.send('```js\n{ Restarting: 0 }\n```');
        channel.send('```js\n{\n Restarting: 0\n Restarted: 1\n}\n```');
        channel.send(`\`\`\`js\n{ ReadyIn: { ms: ${undefined} } }\n\`\`\``);
        const mainChannel = client.channels.cache.get('918726871892516897');
        setInterval(() => mainChannel.sendTyping(), 10000);
    }
};
