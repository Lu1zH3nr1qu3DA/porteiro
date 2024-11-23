const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        console.log(`Login ${client.user.tag} - OK`);
        client.user.setActivity('Fogaréu Grátis');
        console.log('Atribuição de atividade - OK');
	},
};