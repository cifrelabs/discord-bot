import { SlashCommandBuilder } from 'discord.js';
import { successEmbed } from '../utils/embeds.js';

/**
 * All of the information about the command
 */
export const data = new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Check if you did everything right when setting up the bot.');

/**
 * What will execute once the command is called.
 * @async
 * @method
 * @param {CommandInteraction} interaction - Represents a command interaction.
 */
export const execute = async (interaction) => {
    await interaction.reply({ embeds: [successEmbed] });
}