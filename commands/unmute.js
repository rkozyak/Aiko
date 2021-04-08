module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        
        if(message.member.roles.cache.has('826662253285343285')){
            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'swagster');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
     
                let memberTarget= message.guild.members.cache.get(target.id);
     
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            } else{
                message.channel.send('Cant find that member!');
            }
        } else {
            message.reply('You dont have sufficient permissions!');
        }
    }
}