const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('caraoucoroa')
		.setDescription('Gera uma resposta aleatória de cara ou coroa'),
	async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

		await interaction.deferReply();

        const nAleatorio = Math.round(Math.random() * 1);
        let resultado = '';
        switch (nAleatorio) {
            case 0:
                resultado = "coroa";
            break;
            case 1:
                resultado = "cara";
            break;
        }
		await interaction.editReply(`o resultado foi ${resultado}.`);
	},
};
