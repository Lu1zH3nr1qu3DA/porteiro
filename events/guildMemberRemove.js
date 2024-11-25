const logger = require('../logger')

const { Events } = require('discord.js');

logger.trace("Iniciando Evento despedidas ...");
module.exports = {
	name: Events.GuildMemberRemove,
	once: true,
	execute(member) {
        logger.info(`[${member.guild.name}] ${member}`);
        const fc = member.guild.channels.cache.find(ch => ch.name === 'despedidas');
        fc.send(`Putz, ${member.user.username} foi embora. Vai e volta hein? ${config.fegl}`);
	},
};
logger.trace("Iniciando Evento Despedidas - OK");