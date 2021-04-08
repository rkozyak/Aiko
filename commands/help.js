module.exports = {
    name: 'help',
    description: "this tells you all the commands",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0f4e5f')
        .setTitle('Help')
        .setDescription('These are some of the sever commands')
        .addFields(
            {name: '-rules', value: 'Tells you the rules'},
            {name: '-acceptrules', value: 'Accepts the rules and gives you the verified role'},
            {name: '-play', value: 'Aiko joins your voice channel and plays some music'},
            {name: '-leave', value: 'Aiko leaves your voice channel'},
            {name: '-ticket', value: 'To get in contact with an admin'},
            {name: '-quote', value: 'Tells you a quote :)'},
            {name: '-ping', value: 'pong!'}
        )
        .setFooter('Made with ❤ by richie#0437');

        message.channel.send(newEmbed);
    }
}