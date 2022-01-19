import { Collection } from 'discord.js';
//import { prefixes } from '../../../config.js'
export default {
    name: 'messageCreate',
    async run({ 0: message, client }) {
        //const prefix = prefixes.find(p => message.content.toLowerCase().startsWith(p))
        const prefix = 'ko';
        if (message.content == prefix && message.author.id != '787263928408342548') {
            const embed = await client.components.embeds.get('updateEmbed_data');
            embed.setAuthor({ name: client.user.tag });
            message.channel.send({ embeds: [embed] });
            return;
        }
        if (message.content.startsWith(prefix) && message.author.id == '787263928408342548') {
            const args = message.content.slice(prefix.length).trim().split(/ +/), commandName = args[0]?.toLowerCase(), //fix without ?
            command = client.commands.get(commandName)
                || client.commands.find(cmd => !!cmd.alias && cmd.alias.includes(commandName));
            if (!command)
                return;
            // if (command.args && args.length < 2) {
            //   const errEmbed = await client.components.embeds.get('errEmbed') as MessageEmbed
            //   errEmbed.fields[0].value = '**```diff\n- You need to provide\n- some arguments.```** '
            //   if (command.usage) {
            // 	  errEmbed.fields[0].value += `**\`\`\`diff\n+ Do: ${prefix}${command.name} ${command.usage}\`\`\`**`
            //   }
            // 	message.channel.send({ embeds: [errEmbed] })
            //   return
            // }
            if (command.guildOnly && message.channel.type == 'DM') {
                message.reply('I can\'t run this in DMs.');
                return;
            }
            if (client.cooldowns.has(command.name)) {
                await client.cooldowns.set(command.name, new Collection());
            }
            /*const now = Date.now()
                  const timestamps = client.cooldowns.get(command.name)
                  const cooldownAmount = (command.cooldown || 3) * 1000
            timestamps.has(message.author.id) && (() => {
                      const expirationTime = timestamps.get(message.author.id) + cooldownAmount
                      (now < expirationTime) && (() => {
                          const timeLeft = (expirationTime - now) / 1000
                          return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
                      })()
                  })()
                  timestamps.set(message.author.id, now)
                  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)*/
            try {
                await command.run({ message: message, args: args, client: client });
            }
            catch (err) {
                const embed = client.components.embeds.get('emptyEmbed_data');
                if (err instanceof Error) {
                    console.error(err);
                    embed.description = `**\`\`\`js\n${err}\`\`\`**`;
                    message.reply({
                        embeds: [embed]
                    });
                }
                else {
                    console.log(`Unknown Error\n${err}`);
                    embed.description = `**\`\`\`js\nUnknown Error: ${err}\`\`\`**`;
                    message.reply({
                        embeds: [embed]
                    });
                }
            }
        }
    }
};
