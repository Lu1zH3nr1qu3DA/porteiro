const logger = require('../logger')

const { Events } = require('discord.js');
logger.trace("Iniciando Evento Boas vindas ...");
module.exports = {
        name: Events.GuildMemberAdd,
        once: true,
        execute(member) {
                logger.info(`[${member.guild.name}] (${member})`);
                const wc = member.guild.channels.cache.find(ch => ch.name === 'boas-vindas');
                const rc = member.guild.channels.cache.find(ch => ch.name === 'regras');
                wc.send(`Eae, ${member}! Seja bem vindo ao servidor! Por favor, leia as ${rc.toString()} do servidor.\n${config.bfdgl}`);    
        },
};
logger.trace("Iniciando Evento Boas vindas - OK");