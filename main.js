const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // ...
    ]
})

client.once('ready', () => {
    console.log('BasedBot is online!');
});


client.login("MTA0MDg4MjA3NTE3MzEzODUxNQ.GE5m32.ENnp9cAMXdaIzzIpDiThcfaTopKl30_VoRPD9Y");
