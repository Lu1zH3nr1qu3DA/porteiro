const logger = require('../../logger');

const { SlashCommandBuilder } = require('discord.js');

logger.trace('Iniciando Comando Caça níquel ...')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('cnq')
		.setDescription('Um jogo estilo caça níquel'),
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		await interaction.deferReply();

		const numero1 = Math.round(Math.random() * 9);
		const numero2 = Math.round(Math.random() * 9);
		const numero3 = Math.round(Math.random() * 9);

		await interaction.editReply(`\`${numero1}, ${numero2}, ${numero3}\``);
		
		if (numero1 === numero2 === numero3) {
			await interaction.followUp(':tada::confetti_ball: PARABÉNS, VOCÊ GANHOU!!! :confetti_ball::tada:');
		}
	},
};
logger.trace('Iniciando Comando Caça níquel - OK')