const logger = require('../../logger');

const { SlashCommandBuilder } = require('discord.js');

logger.trace('Iniciando Comando Help ...');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Ajuda com os comandos do bot'),
	async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        await interaction.deferReply({ ephemeral: true });

		await interaction.editReply(
            { 
                content: `
Essa é a lista de comandos que você pode usar:
* \`/numaleatorio\` - gera um número aleatório entre 0 e 9.
* \`/cnq\` - um jogo estilo caça-níquel que gera 3 números aleatórios de 0 a 9. Se você conseguir um trio de números iguais, você vence!
* \`/help\` - mostra essa mensagem

Use um desses comandos citados acima para executar a ação desejada.`, 
            }
        );
	},
};
logger.trace('Iniciando Comando Help - OK');


// Comandos a serem implementados:
// // rd - gera um número aleatório entre 1 e 6.
// // caraoucoroa - gera uma resposta aleatória entre cara e coroa.
// // avt - mostra seu avatar.
// // avt @"usuário" - mostra o avatar da pessoa citada.
// // since guild - mostra há quanto tempo o servidor foi criado.
// // since @"usuário" - mostra há quanto tempo a pessoa citada tem sua conta no Discord.
// // mbrct - mostra o número de membros do servidor (incluíndo bots).
// // mbrsince - mostra há quanto tempo você está no servidor.
// // mbrsince @"usuário" - mostra há quanto tempo o membro citado está no servidor.