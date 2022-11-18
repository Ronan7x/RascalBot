 const { Client, GatewayIntentBits } = require('discord.js')

 const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans
        //intents are needed so discord knows what your  bot is going to do, its almost like permissions 
        //https://discordjs.guide/popular-topics/intents.html#privileged-intents
    
        
    ]
})


const prefix = '-';

client.once('ready', () => {
    console.log('BasedBot is online!');
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const  args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/@rascal7x');

    }
    //this is creating commands for the bot 
});





