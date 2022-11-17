# Discord Bot Template
Creating a Discord Bot from scratch can be tedious. We made this template for everyone to easily create and deploy customized discord bots.

## Prerequisites
1. **NodeJS, NPM, Git** is installed in the system.
2. The Developer should know basic **Javascript.**

## Quick Setup
1. Create a `.env` file containing the following:
```
# You can retrieve them at https://discord.com/developers/applications, when you create your own bot
TOKEN = INSERT_BOT_TOKEN
CLIENT_ID = INSERT_CLIENT_ID
```
2. Run `npm i` in the terminal.
3. Then, run `npm start`.

## Beginner Step-by-step Setup
1. Go to https://discord.com/developers/applications and create a new Application.
2. On the Left Menu Panel, Go to "Bot", and create a new bot.
3. Again on the Left Menu Panel, Go to "OAuth2" → "URL Generator"
   - Under **Scopes**, Tick the "*bot*" checkbox.
   - Under **Scopes**, Tick the "*applications.commands*" checkbox.
   - Under **Bot Permissions**, Tick the "*Adminstrator*" checkbox.
4. If you scroll down, you will see a **Generated URL** section. Copy it and paste it to your web browser's address bar. This will allow you to invite your newly created bot to your own Discord Server.
5. Going back to the program files, Create a `.env` file containing the following:
```
# You can retrieve them at https://discord.com/developers/applications, when you create your own bot
TOKEN = INSERT_BOT_TOKEN
CLIENT_ID = INSERT_CLIENT_ID
```
6. Run `npm start` in the terminal.
7. Go back to your Discord Server where you added your bot, and try to run the command `/hello`.

## Creating a Command
Each command is a separate `.js` file. All of the commands are located in [./src/commands/](https://github.com/cifrelabs/discord-bot-template/tree/main/src/commands). You can use the already-included-sample-command file, [hello.js](https://github.com/cifrelabs/discord-bot-template/blob/main/src/commands/hello.js), as a guide. To add choices to your slash command, refer to this [documentation](https://discordjs.guide/interactions/slash-commands.html#choices).

## Reminders
- We highly suggest to not write your program inside [index.js](https://github.com/cifrelabs/discord-bot-template/blob/main/index.js) but instead create handlers for listeners for better organization. In our convention, we place these events in the [./src/handlers](https://github.com/cifrelabs/discord-bot-template/tree/main/src/handlers) folder (e.g. [message-create-handler.js](https://github.com/cifrelabs/discord-bot-template/blob/main/src/handlers/message-create-handler.js) and [button-handler.js](https://github.com/cifrelabs/discord-bot-template/blob/main/src/handlers/button-handler.js)).
- The `.env` file is not meant to be pushed to the remote repository. We added the file only for faster setup and straight-forward instruction.
