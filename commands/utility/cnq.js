const { SlashCommandBuilder } = require('discord.js');

const r1 = Math.round(Math.random() * 9);
const r2 = Math.round(Math.random() * 9);
const r3 = Math.round(Math.random() * 9);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cnq')
		.setDescription('Um jogo estilo caça níquel'),
	async execute(interaction) {
		await interaction.reply(`{[( ${r1} )]} {[( ${r2} )]} {[( ${r3} )]}\nResultado de ${msg.author}.`);
        if (r1 == r2 == r3) {
            interaction.send(`:tada::confetti_ball: PARABÉNS, ${msg.author} VOCÊ GANHOU!!! :confetti_ball::tada:`);
        };
	},
};
