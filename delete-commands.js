const logger = require('./logger')

const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');

const rest = new REST().setToken(token);

// for global commands
logger.trace(`Deleting all application commands ...`);
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => logger.info('Successfully deleted all application commands.'))
	.catch(logger.error);