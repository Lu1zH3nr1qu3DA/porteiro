const pino = require("pino")({
    level: "warn",
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,        
        }
    },
});
  
module.exports = pino;