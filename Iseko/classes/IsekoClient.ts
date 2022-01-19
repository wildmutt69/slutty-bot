import {
	Client, Collection, MessageEmbed, MessageButton,
	ClientOptions, Message
} from 'discord.js'
import { readdirSync } from 'fs'

export class IsekoClient extends Client<true> {
	
	baseDir
	runAt
  components: {
		embeds: Collection<string, MessageEmbed>,
		buttons: Collection<string, MessageButton>
	} = {
	  embeds: new Collection(),
	  buttons: new Collection()
	}
	commands: Collection<string, {
	  name: string
	  alias?: string[]
		args?: boolean
		guildOnly?: boolean
	  category?: string
	  usage?: string
	  conditions?: string[]
	  permissions?: string[]
	  run({ message, args, client }: { message: Message, args: string[], client: IsekoClient }): Promise<void>
  }> = new Collection()
	cooldowns: Collection<string, {}> = new Collection()

	constructor(clientOptions: ClientOptions, isekoOptions: {
      baseDir: string,
			runAt: number
	  }) {
		super(clientOptions)
		this.baseDir = isekoOptions.baseDir
		this.runAt = isekoOptions.runAt
	}

  handleEvents(
		eventsFolder = `${process.cwd()}/${this.baseDir}/events`
		?? `${process.cwd()}/Iseko/events`
	) {
		readdirSync(eventsFolder)
		.forEach(async (subFolder) => {
      readdirSync(`${eventsFolder}/${subFolder}`)
			.forEach(async (file) => {
			  const { default: module } = await import(`${eventsFolder}/${subFolder}/${file}`)
			  module.once
			  ? this.once(module.name, async (...args) => {
			      module.run({ ...args, client: this })
			    })
			  : this.on(module.name, async (...args) => {
			      module.run({ ...args, client: this })
			    })
		  })
		})
		return this
	}
	
	handleComponents(options?: {
		embeds: string,
		buttons: string
	}) {

	  const handleEmbeds = (
			embedsFolder = `${process.cwd()}/${this.baseDir}/embeds`
			?? `${process.cwd()}/Iseko/embeds`
		) => {
  		readdirSync(embedsFolder)
		  .forEach(async (subFolder) => {
        readdirSync(`${embedsFolder}/${subFolder}`)
			  .forEach(async (file) => {
	  		  const { default: module } = await import(`${embedsFolder}/${subFolder}/${file}`)
  			  module.data = new MessageEmbed()
			  	  .setColor([47, 49, 54])
		  	    .setTimestamp()
	  		  const embedProps = {
  				  nonArray: ['Title', 'Description', 'URL', 'Color', 'Thumbnail', 'Image', 'Author', 'Footer'],
				    array: ['Fields']
				  }
		  	  embedProps.nonArray.forEach(async (prop) => {
            if (module[prop]) module.data[`set${prop}`](module[prop])
  			  })
			    embedProps.array.forEach(async (prop) => {
            if (module[prop]) module.data[`set${prop}`](...module[prop])
	  		  })
  			  if (module.Timestamp == false) module.data.setTimestamp(null)
			    this.components.embeds.set(`${module.Name}_data`, module.data)
		    })
	    })
		}

  	const handleButtons = (
			buttonsFolder = `${process.cwd()}/${this.baseDir}/buttons`
			?? `${process.cwd()}/Iseko/buttons`
		) => {
	  	readdirSync(buttonsFolder)
	  	.forEach(async (subFolder) => {
				readdirSync(`${buttonsFolder}/${subFolder}`)
				.forEach(async (file) => {
	  		  const { default: module } = await import(`${buttonsFolder}/${subFolder}/${file}`)		
	  		  module.data = new MessageButton()
	  		    .setCustomId(module.customId)
	  		  	.setLabel(module.label)
	  		  	.setStyle(module.style)
	  		  this.components.buttons
	  		    .set(`${module.customId}_data`, module.data)
	  		    .set(module.customId, module.run)
	  	  })
			})
	  }

		handleEmbeds(options?.embeds)
		//handleButtons(options?.buttons)
		return this
	}

	handleCommands(
		commandsFolder = `${process.cwd()}/${this.baseDir}/commands`
		?? `${process.cwd()}/Iseko/commands`
	) {
		readdirSync(commandsFolder)
		.forEach(async (subFolder) => {
			readdirSync(`${commandsFolder}/${subFolder}`)
			.forEach(async (file) => {
			  const { default: module } = await import(`${commandsFolder}/${subFolder}/${file}`)		
			  this.commands.set(module.name, module)
			})
		})
		return this
	}
}