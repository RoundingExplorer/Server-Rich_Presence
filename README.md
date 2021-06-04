# Server Rich Presence

![Rich Presence Image](https://cdn.discordapp.com/attachments/828750159072460801/850402494798233600/DzF253sBXcdvAAAAAElFTkSuQmCC.png?width=128&height=128)\
Rich presence for promoting JavaScript Universe.

## What's Rich Presence?
> Rich Presence is a new feature from Discord that allows you to surface unique, interesting, and actionable data inside a Discord user’s profile when they play your game! - **Discord Rich Presence Documentation**

Rich presence is quite common on Discord and you might have seen it in action on quite a few users.  Whether they're listening to Spotify, playing the latest and greatest game, or doing something else like coding, you might see a small card underneath the user's profile stating what the user is doing.  These Rich Presences look quite cool and users have found ways to control the Rich Presence to their liking for customization purposes.
## Pre-Requisites:
Before you can continue, make sure you have the following on your computer:
* A downloaded Discord App (it can be Stable, PTB, Canary, or Development)
* [Node.js](https://nodejs.org) (must be version 12.0 or later)
* A working internet connection
## Quickstart Guide:
- Fork this repository
- Save this repository as `index.js`
- Install the [`discord-rpc`](https://www.npmjs.com/package/discord-rpc) NPM package
- To start the process, run `node index.js` on your command line

## Troubleshooting:
In some cases, there are issues with running the rich presence script or it not showing up at all.  Be sure that you are running it on the same machine as your account (i.e. you run it on your laptop since that's where your account is logged in on).  Also, be sure that you have the correct packages installed as mentioned earlier and that you are running Node.js v12 or higher.

If there are errors about connection, try the following troubleshooting methods:
* Restart your Discord client (making sure you're still logged in), then run the script.
* Restart your computer, open your Discord client (makign sure you're still logged in), then run the script.
* Make sure you did not change the client ID at the bottom of the script.

If this doesn't work, please make an issue here as it is most likely a result of the application having issues.

## Discord's ToS:
At the time of writing, having your own custom Rich Presence is not against the Discord Terms of Service as you are not automating your account or modifying any part of your client.  Overall, you should be safe running this script.

## Miscellaneous:
If you have any further questions about this or our other projects, you can visit our [support server](https://discord.gg/KBfTgpx) to ask us any questions or give us your feedback about this script.  Feel free to make a pull request for any changes or make an issue if something isn't working right. We'll get back to you then.  Have a good day!
