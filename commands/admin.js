module.exports = {
    name: 'admin',
    description: "adnin only command",
    execute(message, args){
        
        //If the person has the admin role it will send test
        if(message.member.roles.cache.has('826662253285343285')){
            message.channel.send('test!')
    
        } else {
            message.reply('You dont have sufficient permissions!');
        }
    }
}