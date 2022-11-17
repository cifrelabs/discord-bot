import { SlashCommandBuilder } from '@discordjs/builders';
import { successEmbed } from '../utils/embeds/general-embeds.js';

/**
 * Every command file must observe the following conventions:
 * 1. Must be inside the ./src/commands/ folder
 * 2. Must include 'import { SlashCommandBuilder } from '@discordjs/builders';'
 * 3. Must have two exported constants namely 'data' and 'execute' just like below.
 * 4. 'data' must be a SlashCommandBuilder Object complete with its details. Documentations: https://discordjs.guide/popular-topics/builders.html#slash-command-builders 
 * 5. 'execute' must be a function holding the interaction, and inside of it is the process or the program.
 * 
 * Tip:
 * - Just copy the whole content of this file to every new command you're going to create,
 * - then just change the values to your liking.
 */

export const data = new SlashCommandBuilder()
    .setName('hello') // The name of the slash command
    .setDescription('Check if you did everything right when setting up the bot.');

export const execute = async (interaction) => {
    await interaction.reply({ embeds: [successEmbed] });
}