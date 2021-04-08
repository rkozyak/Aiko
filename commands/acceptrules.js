module.exports = {
    name: 'acceptrules',
    description: "command to add verified role",
    execute(message, args){
        
        if(message.member.roles.cache.has('826842290206801931')){
            message.reply('You have already accecpted the rules!')
    
        } else {
            message.reply('You have now accepted the rules and have revieved the verified role!');
            message.member.roles.add('826842290206801931');
            if(message.member.roles.cache.has('826658985931046953')){
                message.member.roles.remove('826658985931046953');
        
            } else;
        }
    }
}