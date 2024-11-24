const pino = require("pino")({
    level: "debug",
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,        
        }
    },
});
  
module.exports = pino;