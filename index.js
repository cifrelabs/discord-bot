/**
 * @author Cifre Labs
 * @version 2.4.1
 */

import { Client, Collection, Events, GatewayIntentBits, Partials } from 'discord.js';
import { messageCreateListener, messageReactionAddListener } from './src/listeners/message.js';
import { guildMemberAddListener, guildMemberRemoveListener } from './src/listeners/guild.js';
import { interactionListener } from './src/listeners/interaction.js';
import fs from 'fs';
import 'dotenv/config';

// Create a Discord Client
const client = new Client({ 
	intents: [ 
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMembers, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.GuildInvites, 
		GatewayIntentBits.MessageContent, 
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.GuildScheduledEvents,
	],
	partials: [ 
		Partials.Message, 
		Partials.Channel, 
		Partials.Reaction, 
		Partials.User,
		Partials.GuildScheduledEvent,
	]
});

// Retrieve commands from the /commands folder and store to the client object
client.commands = new Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = await import(`./src/commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Event where new members join the Server
client.on(Events.GuildMemberAdd, async member => {
	await guildMemberAddListener(member);
});

// Event where members leave the Server
client.on(Events.GuildMemberRemove, async member => {
	await guildMemberRemoveListener(member);
});

// Main Event Listeners for All Interactions (Commands/Buttons/Modals/Menus)
client.on(Events.InteractionCreate, async interaction => {
	await interactionListener(interaction);
});

// Main Event Listeners for All Messages in the Server.
client.on(Events.MessageCreate, async interaction => {
	await messageCreateListener(interaction);
});

// Main Event Listeners for All Reactions Made in the Server.
client.on(Events.MessageReactionAdd, async interaction => {
	await messageReactionAddListener(interaction);
});

// All Error Handling
// client.on(`debug`, console.log)

client.on(Events.Error, error => {
	console.error(`I encountered an error:`, error);
});

client.on(Events.ShardError, error => {
	console.error(`I encountered a websocket connection error:`, error);
});

process.on(`unhandledRejection`, error => {
	console.error(`I encountered an unhandled promise rejection:`, error);
});

client.once(Events.ClientReady, async () => { 
	console.log(`Online and Ready as ${client.user.username}`);
});

// Do not delete this line. This makes the bot online
client.login(process.env.TOKEN).catch(e => console.error(e));
