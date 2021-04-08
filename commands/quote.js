const quotes = require('../resources/quote.json')

module.exports = {
    name: 'quote',
    description: "this sends you a random quote from a list of quotes",
    execute(message, args, Discord) {
        //Finds a random quote
        const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)]

        //Creates an embed using the quote it selected
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