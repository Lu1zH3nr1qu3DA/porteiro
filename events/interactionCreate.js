const logger = require('../logger')

const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		logger.info(`${interaction.user.tag} executou /${interaction.commandName}.`);

		if (!command) {
			logger.error(`Nenhum comando com o nome ${interaction.commandName} foi encontrado.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			logger.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'Ocorreu um erro ao executar o comando!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'Ocorreu um erro ao executar o comando!', ephemeral: true });
			}
		}
	},
};