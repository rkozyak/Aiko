module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        
        //If they have the admin role it will remove the muted role from the mentioned player and add back thier old role 
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
        //If they dont have the admin role then it will tell them they cant use this command
        } else {
            message.reply('You dont have sufficient permissions!');
        }
    }
}