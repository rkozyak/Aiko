const quotes = require('../resources/quote.json')

module.exports = {
    name: 'quote',
    description: "this tells you the daily quote",
    execute(message, args, Discord) {
        const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)]

        const newEmbed = new Discord.MessageEmbed({
            color: '#0f4e5f',
            title: 'Motivational Quote :))',
            fields: [
                { name: `"${selectedQuote.quote}"`, value: `- ${selectedQuote.author}` }
            ]
        }).setFooter('Made with ❤ by richie#0437').setThumbnail(selectedQuote.thumbnail)

        message.channel.send(newEmbed);
    }
}