const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(client, message, args){
        //If they have the admin role it will give the mentioned player the muted role which does not have access to send messages 
        if(message.member.roles.cache.has('826662253285343285')){
            const target = message.mentions.users.first();
            if (target) {
     
                let mainRole = message.guild.roles.cache.find(role => role.name === 'swagster');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
     
                let memberTarget = message.guild.members.cache.get(target.id);
     
                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
     
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('Cant find that member!');
            }
        //If they dont have the admin role then it will tell them they cant use this command
        } else {
            message.reply('You dont have sufficient permissions!');
        }
    }
}