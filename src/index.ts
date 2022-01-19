let runAt = Date.now()
import { IsekoClient } from './Iseko/classes/IsekoClient.js'
import { serve } from './ioServer.js'
//import mongoose from 'mongoose'

const client = new IsekoClient({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES'],
  ws: {
    properties: {
      $browser: 'Discord iOS'
    }
  }
}, {baseDir: './Iseko', runAt: runAt})

;(async () => {
	serve(client)
	client
	  .handleEvents()
	  .handleComponents()
	  .handleCommands()
    .login(process.env['token'])
})()