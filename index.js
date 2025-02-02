const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });

const A = [
    "Maintaining the peace",
    "Attempting to teach",
    "Teaching JavaScript",
    "Being made fun of",
    "ReferenceError: LionLuke is not defined",
];

(async () => {
    client.on('ready', async () => {
	setInterval(() => {
        await client.setActivity({
            buttons: [{ label: "Join", url: "https://discord.gg/dhFKyJhRE6" }],
            details: A[Math.floor(Math.random() * A.length)],
            largeImageKey: "rpc_icon"
        }).catch(err => console.log(err));
    }, 15000)

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: "750034738751733883" }).catch(console.error);
})();
