module.exports = {
    name: 'acceptrules',
    description: "command to add verified role",
    execute(message, args){
        
        //If they have the verrified role then it will send this message
        if(message.member.roles.cache.has('826842290206801931')){
            message.reply('You have already accecpted the rules!')
    
        //If they dont have the verrified role, it will add it and remove the pending role
        } else {
            message.reply('You have now accepted the rules and have revieved the verified role!');
            message.member.roles.add('826842290206801931');
            if(message.member.roles.cache.has('826658985931046953')){
                message.member.roles.remove('826658985931046953');
        
            } else;
        }
    }
}