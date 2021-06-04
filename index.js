const RPC = require("discord-rpc");
const client = new RPC.Client({
  transport: "ipc",
});
const A = [
  "Maintaining the peace",
  "Attempting to teach",
  "Teaching JavaScript",
  "Being made fun of",
  "ReferenceError: LionLuke is not defined",
];
client.on("ready", () => {
  setInterval(() => {
    client.request("SET_ACTIVITY", {
      pid: process.pid,
      activity: {
        assets: {
          large_image: "jsu_logo__",
        },
        details: A[Math.floor(Math.random() * A.length)],
        buttons: [
          {
            label: "Join",
            url: "https://discord.gg/gRxgAWA",
          },
        ],
      },
    });
  }, 15000);
  console.log("Started!");
});
client.login({
  clientId: "671778487761371157",
});
