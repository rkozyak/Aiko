module.exports = {
    name: 'admin',
    description: "admin only command",
    execute(client, message, args){
        
        //If the person has the admin role it will send test
        if(message.member.roles.cache.has('826662253285343285')){
            message.channel.send('test!')
    
        } else {
            message.reply('You dont have sufficient permissions!');
        }
    }
}