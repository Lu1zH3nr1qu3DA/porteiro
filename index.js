const logger = require('./logger');

logger.trace("Iniciando Porteiro ...");
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Comandos
logger.trace("Iniciando comandos...");
client.commands = new Collection();
const commandFoldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(commandFoldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(commandFoldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			logger.warn(`The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}
logger.trace("Iniciando comandos - OK")

// Eventos
logger.trace("Iniciando eventos...");
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
logger.trace("Iniciando eventos - OK");

// Login
client.login(token);
logger.trace("Iniciando Porteiro - OK");







// Código antigo

//     const trumpskatededo = client.emojis.cache.find(emoji => emoji.name === "trumpskatededo");
  
//       // Rolar dado:
//       if (msg.content === '!rd') {
//       const grnbr = Math.floor(Math.random() * 5 + 1);
//         msg.reply(`o resultado foi ${grnbr}.`);
//         console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !rd - o resultado foi ${grnbr}.`);
//       };
  
//       // Mostrar URL do avatar do autor da mensagem:
//       if (msg.content === '!avt') {
//         msg.reply(`este é o seu avatar: ${msg.author.displayAvatarURL()}`);
//         console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !avt - este é o seu avatar: msg.author.displayAvatarURL()`);
//       };
  
//       // Mostrar número de membros do servidor:
//       if (msg.content === '!mbrct') {
//         msg.reply(`atualmente, o servidor está com ${msg.guild.memberCount} membros.`);
//         console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !mbrct - atualmente, o servidor está com ${msg.guild.memberCount} membros.`);
//       };
  
//       // Mostrar URL do avatar do membro mencionado:
//       if (!msg.guild) return;
//       if (msg.content.startsWith('!avt ')) {
//       const nossocasinha = msg.mentions.users.first();
//       const user = msg.guild.member(nossocasinha);
//         if (user) {
//         const member = msg.guild.member(user);
//           if (member) {
//             console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !avt @usuário - este é o avatar de ${nossocasinha.username}: ${nossocasinha.displayAvatarURL()}`);
//                 msg.reply(`este é o avatar de ${user}: ${nossocasinha.displayAvatarURL()}`)
//           .catch(err => {
//                 msg.channel.send('Ocorreu algum erro. Tente novamente.');
//                 console.error(err);
//               });
//           } else {
//             msg.reply("esse membro não existe.");
//           }
//         } else {
//           msg.reply("você não mencionou o membro que quer ver o avatar.");
//         };
//       };
  
//       // Mostrar há quanto tempo o servidor foi criado:
//       if (msg.content === `!since guild`) {
//       const guild = msg.guild;
//             msg.channel.send(`O servidor existe desde ${guild.createdAt.toLocaleDateString()}. Já faz um bom tempo!`);
//             console.log(`[${msg.guild.name}/${msg.channel.name}] (${msg.author.username}) | !since guild - O servidor existe desde ${guild.createdAt}!`);
//       };
  
//       // Mostrar há quanto tempo o membro mencionado tem seu perfil do Discord:
//       if (!msg.guild) return;
//       if (msg.content === `!since ${msg.mentions.users}`) {
//       const user = msg.mentions.users.first();
//         if (user) {
//         const member = msg.guild.member(user);
//           if (member) {
//             msg.reply(`${user} está no Discord desde ${user.createdAt}!`)
//           .catch(err => {
//             msg.channel.send('Ocorreu algum erro. Tente novamente.');
//             console.error(err);
//             });
//           } else {
//             msg.channel.send("esse membro não existe!");
//           };
//         } else {
//           msg.channel.send("você não mencionou o membro.");
//         };
//       };
  
//       // Mostrar há quanto tempo o autor da mensagem é membro do servidor:
//       if (!msg.guild) return;
//       if (msg.content ==='!mbrsince') {
//       const member = msg.guild.member(msg.author);
//         if (member) {
//           msg.reply(`você está no servidor desde ${member.joinedAt}!`)
//             .catch(err => {
//               msg.channel.send('Ocorreu algum erro. Tente novamente.');
//               console.error(err);
//               });
//           } else {
//             msg.channel.send("Ocorreu algum erro. Tente novamente.");
//           }
//       }
  
//       // Mostrar há quanto tempo o membro mencionado faz parte do servidor:
//       if (!msg.guild) return;
//       if (msg.content === `!mbrsince ${msg.mentions.users}`) {
//       const nossocasinha = msg.mentions.users.first();
//       const user = msg.guild.member(nossocasinha);
//         if (user) {
//         const member = msg.guild.member(user);
//           if (member) {
//             msg.reply(`${user} está no servidor desde ${user.joinedAt}!`)
//           .catch(err => {
//             msg.channel.send('Ocorreu algum erro. Tente novamente.');
//             console.error(err);
//               });
//           } else {
//             msg.channel.send("esse membro não existe.");
//           };
//         } else {
//           msg.channel.send("você não mencionou o membro que quer saber o tempo que ele está no Discord.");
//         };
//         };
//       };