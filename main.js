//Imports configs
require('dotenv').config();
const config = require('./config.json')
const quotes = require('./resources/quote.json')

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';
const fs = require('fs');
const { send } = require('process');
const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//Tells console that the bot it online
client.once('ready', () => {
    console.log('Aiko is online!');
    memberCounter(client);
});

//Gives new members the pending role and sends a message welcoming them
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'swag pending');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('824491352153653260').send(`Welcome <@${guildMember.user.id}> to swagalicious homies! Please read the <#824498701657440296> and do -acceptrules in <#826667824449323008>!`)
    guildMember.send('Welcome to swagalicious homies :)')
});

//Command Handler
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'admin') {
        client.commands.get('admin').execute(message, args);
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'rules') {
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command == 'acceptrules') {
        client.commands.get('acceptrules').execute(message, args);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command == 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command == 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command == 'quote') {
        client.commands.get('quote').execute(message, args, Discord);
    } else if (command == 'ticket') {
        client.commands.get('ticket').execute(message, args, Discord);
    } else if (command == 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args);
    }
});


client.login(process.env.DISCORD_TOKEN);


//Daily Message
client.once('ready', () => {
    setTimeout(function(){ // in leftToEight() milliseconds run this:
        sendMessage(); // send the message once
        var dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function(){ // repeat this every 24 hours
            sendMessage();
        }, dayMillseconds)
    }, leftToEight())
})

function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(8,0,0,0));
}

const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)]
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
