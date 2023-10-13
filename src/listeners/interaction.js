import { AutocompleteInteraction } from 'discord.js';
import { errorHandler } from '../handlers/error-handler.js';
import { buttonHandler } from '../handlers/button-handler.js';
import { menuHandler } from '../handlers/menu-handler.js';
import { modalHandler } from '../handlers/modal-handler.js';

/**
 * Listens to every event where a interaction is sent or created in the Guild
 * @async
 * @method
 * @param {Object} interaction - Represents a command interaction.
 */
export const interactionListener = async (interaction) => {
    try {
        if (interaction.isAutocomplete()) {
            await interaction.client.commands.get(interaction.commandName).autocomplete(interaction);
        }
        else if (interaction.isCommand()) {
            await interaction.client.commands.get(interaction.commandName).execute(interaction);
        }
        else if (interaction.isButton()) {
            await buttonHandler(interaction);
        }
        else if (interaction.isAnySelectMenu()) {
            await menuHandler(interaction);
        }
        else if (interaction.isModalSubmit()) {
            await modalHandler(interaction);
        }
        else {
            await errorHandler(null, interaction);
        }
    }
    catch (error) {
        if (!(interaction instanceof AutocompleteInteraction)) await errorHandler(error, interaction);
    }
}