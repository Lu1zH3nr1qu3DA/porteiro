const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tc')
		.setDescription('Gera uma resposta aleatória entre cara e coroa'),
	async execute(interaction) {
        const randomN = Math.round(Math.random());
        const resultado = '';
        switch (randomN) {
            case 0:
                resultado = "coroa";
            break;
            case 1:
                resultado = "cara";
            break;
        }
		await interaction.reply(`o resultado foi ${resultado}.`);
	},
};
