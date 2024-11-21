// Necessários para o login:
'use strict';
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client({ intents: [
  Discord.GatewayIntentBits.Guilds,
  Discord.GatewayIntentBits.GuildMessages
]});
client.login(config.token);

// Ao fazer login:
client.on('ready', () => {
  client.user.setActivity('Fogaréu Grátis');
  console.log(`Estou pronto!`);
});

// Boas vindas:
client.on('guildMemberAdd', member => {
  console.log(`[${member.guild.name}] (${member})`);
  const wc = member.guild.channels.cache.find(ch => ch.name === 'boas-vindas');
  const rc = member.guild.channels.cache.find(ch => ch.name === 'regras');
  wc.send(`Eae, ${member}! Seja bem vindo ao servidor! Por favor, leia as ${rc.toString()} do servidor.
${config.bfdgl}`);
});

// Despedidas:
client.on('guildMemberRemove', member => {
  console.log(`[${member.guild.name}] ${member}`);
  const fc = member.guild.channels.cache.find(ch => ch.name === 'despedidas');
  fc.send(`Putz, ${member.user.username} foi embora. Vai e volta hein? ${config.fegl}`);
});

// Responder mensagens:
client.on('message', msg => {
  if (msg.author.bot) return;
  const cc = msg.guild.channels.cache.find(ch => ch.name === 'comandos');
  const ps = msg.guild.channels.cache.find(ch => ch.name === 'sessão-privada');
  const adm = msg.guild.roles.cache.find(role => role.name === 'Administradores');
  const trumpskatededo = client.emojis.cache.find(emoji => emoji.name === "trumpskatededo");
  if (msg.channel === cc || msg.channel === ps) {

    // Ajuda:
    if (msg.content === '!help') {
      msg.reply(`essa é a lista de comandos que você pode usar:
      !grn = gera um número aleatório entre 0 e 9.
      !cnq = um jogo estilo caça níquel que gera 3 números aleatórios de 0 a 9. Se você conseguir um trio de números iguais, você vence!
      !rd = gera um número aleatório entre 1 e 6.
      !tc = gera uma resposta aleatória entre cara e coroa.
      !avt = mostra seu avatar.
      !avt @"usuário" = mostra o avatar da pessoa citada.
      !since guild = mostra há quanto tempo o servidor foi criado.
      !since @"usuário" = mostra há quanto tempo a pessoa citada tem sua conta no Discord.
      !mbrct = mostra o número de membros do servidor (incluíndo bots).
      !mbrsince = mostra há quanto tempo você está no servidor.
      !mbrsince @"usuário" = mostra há quanto tempo o membro citado está no servidor.
      Use um desses comandos citados acima para executar a ação desejada.`);
      msg.channel.send(`${trumpskatededo}`);
      console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !help`);
    };
    // Cara ou coroa:
    if (msg.content === '!tc') {
    const grnbr = Math.round(Math.random() * 1);
      if (grnbr == 0 ) {
        msg.reply(`o resultado foi coroa.`);
        console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !tc - o resultado foi coroa.`);
      };
      if (grnbr == 1 ) {
        msg.reply(`o resultado foi cara.`);
        console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !tc - o resultado foi cara.`);
      };
    };

    // Número aleatório:
    if (msg.content === '!grn') {
    const grnbr = Math.round(Math.random() * 9);
      msg.reply(`o resultado foi ${grnbr}.`);
      console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !grn - o resultado foi ${grnbr}.`);
    };

    //Caça níqueis:
    if (msg.content === '!cnq') {
    const r1 = Math.round(Math.random() * 9);
    const r2 = Math.round(Math.random() * 9);
    const r3 = Math.round(Math.random() * 9);
      msg.channel.send(`{[( ${r1} )]} {[( ${r2} )]} {[( ${r3} )]}
  Resultado de ${msg.author}.`);
  console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !cnq - {[( ${r1} )]} {[( ${r2} )]} {[( ${r3} )]}`);
      if (r1 == r2 == r3) {
          msg.channel.send(`:tada::confetti_ball: PARABÉNS, ${msg.author} VOCÊ GANHOU!!! :confetti_ball::tada:`);
          console.log(`[${msg.guild.name}/${msg.channel.name}] INCRÍVEL, ${msg.author.username} GANHOU!!!`);
      };
    };

    // Rolar dado:
    if (msg.content === '!rd') {
    const grnbr = Math.floor(Math.random() *5+1);
      msg.reply(`o resultado foi ${grnbr}.`);
      console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !rd - o resultado foi ${grnbr}.`);
    };
    ///
    
    ///MOSTRAR URL DO AVATAR DO AUTOR DA MENSAGEM:
    if (msg.content === '!avt') {
      msg.reply(`este é o seu avatar: ${msg.author.displayAvatarURL()}`);
      console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !avt - este é o seu avatar: msg.author.displayAvatarURL()`);
    };
    ///
  
    ///MOSTRAR QUANTIDADE DE PARTICIPANTES NO SERVIDOR:
    if (msg.content === '!mbrct') {
      msg.reply(`atualmente, o servidor está com ${msg.guild.memberCount} membros.`);
      console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !mbrct - atualmente, o servidor está com ${msg.guild.memberCount} membros.`);
    };
    ///
  
    ///MOSTRAR URL DO AVATAR DO MEMBRO MENCIONADO NA MENSAGEM:
    if (!msg.guild) return;
    if (msg.content.startsWith('!avt ')) {
    const nossocasinha = msg.mentions.users.first();
    const user = msg.guild.member(nossocasinha);
      if (user) {
      const member = msg.guild.member(user);
        if (member) {
          console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !avt @usuário - este é o avatar de ${nossocasinha.username}: ${nossocasinha.displayAvatarURL()}`);
              msg.reply(`este é o avatar de ${user}: ${nossocasinha.displayAvatarURL()}`)
        .catch(err => {
              msg.channel.send('Ocorreu algum erro. Tente novamente.');
              console.error(err);
            });
        } else {
          msg.reply("esse membro não existe.");
        }
      } else {
        msg.reply("você não mencionou o membro que quer ver o avatar.");
      };
    };
    ///
  
    ///MOSTRAR HÁ QUANTO TEMPO O SERVIDOR FOI CRIADO:
    if (msg.content === `!since guild`) {
    const guild = msg.guild;
          msg.channel.send(`O servidor existe desde ${guild.createdAt.toLocaleDateString()}. Já faz um bom tempo!`);
          console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !since guild - O servidor existe desde ${guild.createdAt}!`);
    };
    ///
  
    ///MOSTRAR HÁ QUANTO TEMPO O MEMBRO MENCIONADO TEM SEU PERFIL NO DISCORD:
    if (!msg.guild) return;
    if (msg.content === `!since ${msg.mentions.users}`) {
    const user = msg.mentions.users.first();
      if (user) {
      const member = msg.guild.member(user);
        if (member) {
          msg.reply(`${user} está no Discord desde ${user.createdAt}!`)
        .catch(err => {
          msg.channel.send('Ocorreu algum erro. Tente novamente.');
          console.error(err);
          });
        } else {
          msg.channel.send("esse membro não existe!");
        };
      } else {
        msg.channel.send("você não mencionou o membro.");
      };
    };
    ///
  
    ///MOSTRAR HÁ QUANTO TEMPO O AUTOR DA MENSAGEM ESTÁ NO SERVIDOR:
    if (!msg.guild) return;
    if (msg.content ==='!mbrsince') {
    const member = msg.guild.member(msg.author);
      if (member) {
        msg.reply(`você está no servidor desde ${member.joinedAt}!`)
          .catch(err => {
            msg.channel.send('Ocorreu algum erro. Tente novamente.');
            console.error(err);
            });
        } else {
          msg.channel.send("Ocorreu algum erro. Tente novamente.");
        }
    }
    ///

    ///MOSTRAR HÁ QUANTO TEMPO O MEMBRO MENCIONADO ESTÁ NO SERVIDOR:
    if (!msg.guild) return;
    if (msg.content === `!mbrsince ${msg.mentions.users}`) {
    const nossocasinha = msg.mentions.users.first();
    const user = msg.guild.member(nossocasinha);
      if (user) {
      const member = msg.guild.member(user);
        if (member) {
          msg.reply(`${user} está no servidor desde ${user.joinedAt}!`)
        .catch(err => {
          msg.channel.send('Ocorreu algum erro. Tente novamente.');
          console.error(err);
            });
        } else {
          msg.channel.send("esse membro não existe.");
        };
      } else {
        msg.channel.send("você não mencionou o membro que quer saber o tempo que ele está no Discord.");
      };
      };
    };
    ///

  ///ALERTA DE MENSAGEM CONTENDO CONVITES DE OUTROS SERVIDORES:
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(msg.content)) {
  msg.channel.send(`ae ${adm}, maluco mando convite ae`);
  };
  ///
});
//
client.on('error', console.error);
