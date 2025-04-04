const logger = require('../logger');

const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		logger.info(`Pronto! Bot ${client.user.tag} logado com sucesso.`)
		logger.trace('Iniciando atividade...')
		client.user.setActivity('Fogaréu Grátis', ActivityType.Playing)
		logger.trace('Iniciando atividade - OK')
	},
};