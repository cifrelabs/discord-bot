# Discord Bot Template
Creating a Discord Bot from scratch can be tedious. We made this template for everyone to easily create and deploy customized discord bots.

## Prerequisites
1. [JavaScript](https://www.javascript.com/)
2. [NodeJS and NPM](https://nodejs.org/en/download/)
3. Node Packages:
   - [discord.js](https://discord.js.org/)
   - [dotenv](https://www.npmjs.com/package/dotenv)

## Quick Setup
1. Create a `.env` file containing the following:
```
TOKEN = INSERT_BOT_TOKEN
CLIENT_ID = INSERT_CLIENT_ID
```
2. Run `npm i` in the terminal.
3. Then, run `npm start`.
4. Go to your Discord Server where you added your bot, and try to run the command `/hello`.

## Beginner Step-by-step Setup
1. Go to the [Discord Developers Panel](https://discord.com/developers/applications) and create a new Application.
2. After creating your app, on the Left Menu Panel, Go to **"Bot"**, and create a new bot.
3. This will give you a new **"Token"**. Copy it and paste it to your `.env` file. Do not share this token to anyone.

## Adding the Bot to your Discord Server
1. Again on the Left Menu Panel, Go to **"OAuth2"** → "URL Generator".
   - Under **Scopes**, Tick the `bot` and `applications.commands` checkboxes.
   - Under **Bot Permissions**, Tick the `Administrator` checkbox.
2. If you scroll down, you will see a **Generated URL** section. Copy it and paste it to your web browser's address bar. This will allow you to invite your newly created bot to your own Discord Server.

## Running the Bot
1. Run `npm start` in the terminal.
2. Go back to your Discord Server where you added your bot, and try to run the command `/hello`.

## Creating a Command
Each command is a separate `.js` file. All of the commands are located in [./src/commands/](https://github.com/cifrelabs/djs-template/tree/main/src/commands). You can use the already-included-sample-command file, [hello.js](https://github.com/cifrelabs/djs-template/blob/main/src/commands/hello.js), as a guide. To add choices to your slash command, refer to this [documentation](https://discordjs.guide/creating-your-bot/slash-commands.html#before-you-continue).

## Reminders
- We highly suggest to not write your program inside [index.js](https://github.com/cifrelabs/djs-template/blob/main/index.js) but instead create handlers for listeners for better organization. In our convention, we place these events in the [./src/listeners](https://github.com/cifrelabs/djs-template/tree/main/src/listeners) folder and in the [./src/handlers](https://github.com/cifrelabs/djs-template/tree/main/src/handlers) folder.
- The `.env` file and tokens inside it are not meant to be pushed to the remote repository.