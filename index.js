const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
const A = ["Maintaining the peace", "Attempting to teach", "Teaching JavaScript", "Being made fun of", "ReferenceError: LionLuke is not defined"];
client.on('ready', () =>
{
	setInterval(function() {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            assets: {
                large_image: 'jsu_logo__'
            },
            details: A.random(),
            buttons: [
                { label: 'Join', url: 'https://discord.gg/gRxgAWA' }
            ]
        }
    });
	}, 15000)
    console.log('started!');
});
client.login({ clientId: '671778487761371157' });
