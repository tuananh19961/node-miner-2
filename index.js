const Miner = require('eazyminer');

const miner = new Miner({
    autosave: false,
    pools: [
        {
            enabled: true,
            coin: 'XMR',
            user: '48WpUkENDS2YgMPhGgKEFXcQLYwSW7VeC8uid3xt3pcy9MxVbzk6QAvLxKxfn6jBLYi9ugautQCiSicY5Y9sBxLnAc9uYzN',
            url: 'xmr-asia1.nanopool.org:14433', // optional pool URL,
            pass: "x",
            tls: true,
            "rig-id": 'node-1',
        }
    ],
    autoStart: false, // optional delay,
    cpu: {
        enabled: true,
        "intensity": 2,
        "threads": 4,
        "affinity": -1,
        "max-threads-hint": 70,
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