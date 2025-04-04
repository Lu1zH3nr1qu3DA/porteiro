const logger = require('../logger')

const { Events } = require('discord.js');
const { wavingGifLink } = require('../config.json');

logger.trace("Iniciando Evento despedidas ...");
module.exports = {
	name: Events.GuildMemberRemove,
	once: true,
	execute(member) {
        logger.info(`[${member.guild.name}] ${member}`);
        const canalDespedidas = member.guild.channels.cache.find(ch => ch.name === 'despedidas');
        canalDespedidas.send(`Putz, ${member.user.tag} foi embora. Vai e volta hein? ${wavingGifLink}`);
	},
};
logger.trace("Iniciando Evento Despedidas - OK");