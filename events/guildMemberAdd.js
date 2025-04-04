const logger = require('../logger')

const { Events } = require('discord.js');
const { baldiFortDanceGifLink } = require('../config.json');

logger.trace("Iniciando Evento Boas vindas ...");
module.exports = {
        name: Events.GuildMemberAdd,
        once: true,
        execute(member) {
                const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'boas-vindas');
                const rulesChannel = member.guild.channels.cache.find(channel => channel.name === 'regras');
                welcomeChannel.send(`Eae, ${member.user.tag}! Seja bem vindo ao servidor! Por favor, leia as ${rulesChannel.toString()} do servidor.\n${baldiFortDanceGifLink}`);    
        },
};
logger.trace("Iniciando Evento Boas vindas - OK");