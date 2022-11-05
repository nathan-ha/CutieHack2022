const { Client, GatewayIntentBits, EmbedBuilder, PermisssionsBitField, Permission } = require('discord.js');
const prefix = '!';
const token = 'MTAzODQ4ODI1MzMxOTM1MjQyMQ.GNMDk2.cutDkOt8NGBh1vRejD1mt-QOGDpd9q0NQsZjx4';
const client = new Client ({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on('ready', () => {
    console.log('hello');
    client.user.setActivity('this is pain', {type: "WATCHING"});

})



client.login(token);    