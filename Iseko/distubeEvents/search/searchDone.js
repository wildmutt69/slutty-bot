export default {

  name: 'searchDone',

  async run(message, answer, querry) {

    message.channel.send(`Playing...`).then(msg => {
      message.client.distube.ids.push(msg.id)
      console.log(message.client.distube.ids)
    })
  }
}