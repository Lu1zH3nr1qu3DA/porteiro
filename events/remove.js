const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildMemberRemove,
	once: true,
	execute(member) {
        console.log(`[${member.guild.name}] ${member}`);
        const fc = member.guild.channels.cache.find(ch => ch.name === 'despedidas');
        fc.send(`Putz, ${member.user.username} foi embora. Vai e volta hein? ${config.fegl}`);
        console.log("Função de despedidas - OK");
	},
};