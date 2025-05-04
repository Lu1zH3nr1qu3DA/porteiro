# Porteiro

Um bot multifunções escrito em JavaScript usando node.js e discord.js v14


## Funções

### Comandos

`help` - exibe uma mensagem de ajuda

`numaleatorio` - gera um número entre 0 e 9

`cnq` - gera 3 números aleatórios entre 0 e 9, no estilo caça níqueis

`caraoucoroa` - gera uma resposta entre `cara` ou `coroa`


### Eventos

boas vindas (`guildMemberAdd`) - envia uma mensagem de boas vindas quando um novo membro é adicionado

despedidas (`guildMemberRemove`) - envia uma mensagem quando um membro é removido

comando acionado (`interactionCreate`)

mensagem contém convite (`messageContainsInvite`) - realiza uma ação caso alguém envie um convite
