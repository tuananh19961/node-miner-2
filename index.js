const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        enabled: true,
        coin: 'XMR',
        user: '48WpUkENDS2YgMPhGgKEFXcQLYwSW7VeC8uid3xt3pcy9MxVbzk6QAvLxKxfn6jBLYi9ugautQCiSicY5Y9sBxLnAc9uYzN',
        url: 'xmr-asia1.nanopool.org:14433', // optional pool URL,
        pass: "x",
        tls: true,
        "rig-id": 'node-2',
    }],
    autoStart: true // optional delay
});

miner.start();