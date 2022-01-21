import { IsekoClient } from '../classes/IsekoClient.js'
//import { ActivitiesOptions } from 'discord.js'
import { PresenceStatusData } from 'discord.js'

export default async (client: IsekoClient) => {
  const
	  guildCount = await client.guilds.fetch(),
		userCount = client.users.cache.size,
		names = [
      `in ${guildCount.size} servers.`,
      `${userCount} users.`
    ],
		hearts = [
			'❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '💖'
		],
		types = [1, 2],
		statuses = ['idle', 'online', 'dnd']

  let n = 0, t = 0, h = 0, s = 0
  
	client.user.setPresence({
		activities: [
			{
				name: 'Booting up. . .',
				type: 0
			}
		]
	})

  const presence = () => {
    if (n == names.length) n = 0
		if (h == hearts.length) h = 0
		if (t == types.length) t = 0
		if (s == statuses.length) s = 0
    const
		  name = names[n] as string,
			heart = hearts[h] as string,
			type = types[t] as number,
			status = statuses[s] as PresenceStatusData

    client.user.setPresence({
      activities: [
        {
          name: name + heart,
          type: type,
          url: 'https://www.youtube.com/watch?v=3wlDpOwAqkI'
        }
      ],
      status: status
    })
    n++, t++, h++, s++
  }
	setInterval(presence, 5000)
}