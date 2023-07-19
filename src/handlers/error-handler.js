import { errorEmbed } from "../utils/embeds.js";
import { reply } from "../utils/reply.js";

/**
 * Handles all errors that are thrown in the bot.
 * @param {Object} error - The error that was thrown
 * @param {Object} interaction - Represents a command interaction.
 */
export const errorHandler = async (error, interaction) => {
    console.log(error);
    
    await reply(interaction, [errorEmbed]);
}