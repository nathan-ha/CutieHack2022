const Discord = required('discord.js');
const ms = require('ms')

module.exports = {
    name: 'remind',
    category: 'utility',
    usage: '<time> <reminder>',
    description: 'Remind a user',

    run: (client, message, args) => {
        let reminder = args.slice(1).join(' ');
        let time = args[0];

        const noDurationEmbed = new Discord.MessageEmbed()
            .setColor('Orange')
            .setTitle('Error')
            .setDescription('Please state a duration for the reminder')
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();

        if (!time)
            return message.channel.send(noDurationEmded);

        const noReminderEmbed = new Discord.MessageEmbed()
            .setColor('Orange')
            .setTitle('Error')
            .setDescription('Please state reminder')
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();


        if (!reminder)
            return message.channel.send(noReminderEmded);


        const reminderSetEmbed = newDiscord.MessageEmbed()
            .setColor('Green')
            .setAuthor('Reminder Set!', message.author.displayAvatarURL())
            .setDescription(`Successfully set ${message.author.tag}'s reminder !`)
            .addField('Remind In', `${time}`)
            .addField('Reminder', `${reminder}`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();


        message.channel.send(reminderSetEmbed);


        setTimeout(async function () {
            message.channel.send(`<@${message.author.id}>, here is your remind!`)

            const reminderAlertEmbed = newDiscord.MessageEmbed()
                .setColor('Green')
                .setAuthor('Reminder Alert!', message.author.displayAvatarURL())
                .addField('Reminder', `${reminder}`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp();

            message.channel.send(reminderAlertEmbed);
        }, ms(time));

    },


};
