module.exports = {
    name: 'clear',
    description: "Command to clear text",
    async execute(message, args){
        if(message.member.roles.cache.has('826662253285343285')){
            if(!args[0]) return message.reply("Please enter the ammount of messages that you want to clear!");
            if(isNaN(args[0])) return message.reply("Please enter a numerical value!");
    
            if(args[0] > 100) return message.reply("Please use a smaller value");
            if(args[0] <1) return message.reply("You must input a value that is at least one!")
    
            await message.channel.messages.fetch ({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages)
            })
        } else {
            message.reply('You dont have sufficient permissions!');
        }
    }
}