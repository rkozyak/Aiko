require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.DISCORD_TOKEN);

const quotes = require('./resources/quote.json')


client.once('ready', () => {
    console.log('Aiko is online!');
    sendDaily();
});

async function sendDaily() {
    const sendDailyMessage = async () => {
        const guild = client.guilds.cache.get("824491352153653258")
        console.log('sending daily quote...')
        const channel = client.channels.cache.get('827930016083738664');

        if (guild && channel) {
            console.log('guild and channel check passed...')
            await new Promise((resolve) => {
                const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)]

                const newEmbed = new Discord.MessageEmbed({
                    color: '#0f4e5f',
                    title: 'Daily Quote :))',
                    fields: [
                        { name: `"${selectedQuote.quote}"`, value: `- ${selectedQuote.author}` }
                    ]
                }).setFooter('Made with ❤ by richie#6666 with help from piman#4259').setThumbnail(selectedQuote.thumbnail)


                channel.send(newEmbed).then(() => {
                    resolve();
                })
            })

            client.destroy();
        } else {
            console.log("Didnt work :(");
            client.destroy();
        }
    }
    //wait until next midnight
    await new Promise((resolve) => {
        const currentTime = Date.now();
        const nextMidnight = ((Math.ceil(currentTime / 86400000) + 1) * 86400000)

        setTimeout(() => {
            resolve();
        }, nextMidnight - currentTime)
    })
    //start cycle
    while (true) {
        sendDailyMessage();
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 86400000)
        })
    }
}