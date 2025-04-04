const pino = require("pino")({
    level: "info",
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,        
        }
    },
});
  
module.exports = pino;