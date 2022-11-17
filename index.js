import { Client, Collection, Intents } from 'discord.js';
import { messageReactionAddHandler } from "./src/handlers/message-reaction-add-handler.js";
import { messageCreateHandler } from "./src/handlers/message-create-handler.js";
import { buttonHandler } from "./src/handlers/button-handler.js";
import fs from 'fs';
import 'dotenv/config';

const client = new Client({ 
	intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS ],
	partials: [ 'MESSAGE', 'CHANNEL', 'REACTION' ]
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = await import(`./src/commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.log = message => console.log(`${client.user.tag}: ${message}`);

// Listening for messages sent
client.on('messageCreate', async message => {
	try { await messageCreateHandler(message); }
    catch (e) { console.error(e); }
});

// Listening for reactions added
client.on('messageReactionAdd', async (reaction, user) => {
	try { await messageReactionAddHandler(reaction, user); } 
	catch (e) { console.error(e); }
});

// Listening for interactions created
client.on('interactionCreate', async interaction => {
	if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        if(!command) return;

        try { await command.execute(interaction, client); }
        catch (e) { console.error(e); }
	}
	if (interaction.isButton()) {
		try { await buttonHandler(interaction, client); }
        catch (e) { console.error(e); }
	}
});

// Error Handling
client.on('error', error => {
	console.error('The bot encountered an error:', error);
});

client.on('shardError', error => {
	console.error('The bot encountered a websocket connection error:', error);
});

// Uncomment Line 57 only whenever debugging connection with DiscordAPI
// client.on('debug', console.log);

process.on('unhandledRejection', error => {
	console.error('The bot encountered an unhandled promise rejection:', error);
});

client.once('ready', async bot => {
	bot.user.setPresence({ activities: [{ name: 'You create me', type:'WATCHING' }] });

    client.log(`Online and Ready as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
