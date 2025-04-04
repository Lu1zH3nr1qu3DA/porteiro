const logger = require('../logger');

const { Events } = require('discord.js');

logger.trace('Iniciando Evento Detecção de convites ...')
module.exports = {
	name: Events.MessageCreate,
	once: true,
	execute(message) {
                const adm = message.guild.channels.cache.find(ch => ch.name === 'comandos');
                const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
                if (regex.exec(message.content)) {
                        message.channel.send(`ae ${adm}, maluco mando convite ae`);
                };
	},
};
logger.trace('Iniciando Evento Detecção de convites - OK')