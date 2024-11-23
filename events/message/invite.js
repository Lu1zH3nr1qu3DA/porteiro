const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	once: true,
	execute(msg) {
        const adm = msg.guild.channels.cache.find(ch => ch.name === 'comandos');
        const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
        if (regex.exec(msg.content)) {
        msg.channel.send(`ae ${adm}, maluco mando convite ae`);
        };
	},
};