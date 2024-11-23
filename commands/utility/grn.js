const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('grn')
		.setDescription('Gera um número aleatório entre 0 e 9'),
	async execute(interaction) {
		const grnbr = Math.round(Math.random() * 9);
        await interaction.reply(`o resultado foi ${grnbr}.`);
	},
};