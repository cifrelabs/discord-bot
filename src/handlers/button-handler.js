/**
 * Button Handler for your Discord Bot, placed in a separated file for organization.
 * @param {BaseInteraction} interaction 
 * @param {Client} client 
 */
export const buttonHandler = (interaction, client) => {
    const { customId } = interaction;

    if (customId === 'ping') {
        // Add your program here
    }
}