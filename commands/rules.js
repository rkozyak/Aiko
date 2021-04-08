module.exports = {
    name: 'rules',
    description: "this tells you the rules",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0f4e5f')
        .setTitle('Rules')
        .setDescription('These are the sever rules')
        .addFields(
            {name: 'Rule 1', value: 'dont be toxic, racist, etc.'},
            {name: 'Rule 2', value: 'be user friendly (no explicit content)'},
            {name: 'Rule 3', value: 'use proper voice/text channels'},
            {name: 'Rule 3', value: 'have fun!!!'}
        )
        .setFooter('Made with ❤ by richie#6666');

        message.channel.send(newEmbed);
    }
}