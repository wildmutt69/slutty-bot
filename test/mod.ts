import { createRequire } from 'https://deno.land/std/node/module.ts'

const
  require = createRequire(import.meta.url),
  { Client } = require('discord.js')
const client = new Client({
    intents: [
			'GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES'
		],
    ws: {
      properties: {
        $browser: 'Discord iOS'
      }
    }
  })

client.login(Deno.env.get('token1'))

//import { Client } from './node_modules/discord.js/src/index.js'
console.log('hi')