import { SlashCommandBuilder, ActionRowBuilder } from 'discord.js';
import { successEmbed } from '../utils/embeds.js';
import { Buttons } from '../utils/buttons.js';

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
    const buttons = new ActionRowBuilder().setComponents(Buttons.Documentation, Buttons.Support);

    await interaction.reply({ embeds: [successEmbed], components: [buttons] });
}