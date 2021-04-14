//Imports configs
require('dotenv').config();
const config = require('./config.json')
const quotes = require('./resources/quote.json')

const Discord = require('discord.js');
const client = new Discord.Client();

//const prefix = '-';
const fs = require('fs');
const { send } = require('process');
const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})

client.once('ready', () => {
     memberCounter(client);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'swag pending');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('824491352153653260').send(`Welcome <@${guildMember.user.id}> to swagalicious homies! Please read the <#824498701657440296> and do -acceptrules in <#826667824449323008>!`)
    guildMember.send('Welcome to swagalicious homies :)')
});

client.login(process.env.DISCORD_TOKEN);

//Daily Message
client.once('ready', () => {
    setTimeout(function(){ // in leftToEight() milliseconds run this:
        sendMessage(); // send the message once
        var dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function(){ // repeat this every 24 hours
            const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)]
            sendMessage();
        }, dayMillseconds)
    }, leftToEight())
})

function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(8,0,0,0));
}

const newEmbed = new Discord.MessageEmbed({
    color: '#0f4e5f',
    title: 'Daily Motivational Quote :))',
    fields: [
        { name: `"${selectedQuote.quote}"`, value: `- ${selectedQuote.author}` }
    ]
}).setFooter('Made with ❤ by richie#0437').setThumbnail(selectedQuote.thumbnail)

function sendMessage(){
    var guild = client.guilds.cache.get('824491352153653258');
    if(guild && guild.channels.cache.get('827930016083738664')){
        guild.channels.cache.get('827930016083738664').send(newEmbed);
        console.log('Aiko sent the daily quote!');
    }
}
