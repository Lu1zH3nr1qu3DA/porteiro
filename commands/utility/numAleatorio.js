const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('numaleatorio')
		.setDescription('Gera um número aleatório entre 0 e 9'),
	async execute(interaction) {
		const numAleatorio = Math.round(Math.random() * 9);
        await interaction.reply(`o resultado foi ${numAleatorio}.`);
	},
};