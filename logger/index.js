const pino = require("pino")({
    level: "trace",
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,        
        }
    },
});
  
module.exports = pino;