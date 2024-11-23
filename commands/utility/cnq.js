const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cnq')
		.setDescription('Um jogo estilo caça níquel'),
	async execute(interaction) {
		const numero1 = Math.round(Math.random() * 9);
		const numero2 = Math.round(Math.random() * 9);
		const numero3 = Math.round(Math.random() * 9);
		let resultado = "";

		if (numero1 === numero2 === numero3) {
			resultado = ":tada::confetti_ball: PARABÉNS, VOCÊ GANHOU!!! :confetti_ball::tada:";
		}
		await interaction.reply(`{[( ${numero1} )]} {[( ${numero2} )]} {[( ${numero3} )]}\n` + resultado);
	},
};
