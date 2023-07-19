/**
 * @author Cifre Labs
 * @version 1.0.0
 */

/**
 * An easy way to reply to a user's interaction with an embed.
 * @async
 * @method
 * @param {Array<Object>} embeds - An array of embeds to send
 * @returns {Object} - Returns the Message Object if the message was sent successfully, otherwise returns false
 */
export const reply = async (interaction, embeds) => {
    let replied = false;
    
    if (!replied) replied = await interaction.reply({ embeds: [...embeds], ephemeral: true }).catch(() => { return false });

    if (!replied) replied = await interaction.update({ embeds: [...embeds], ephemeral: true }).catch(() => { return false });

    if (!replied) replied = await interaction.followUp({ embeds: [...embeds], ephemeral: true }).catch(() => { return false });

    if (!replied) console.log(`Failed to send an error message to ${interaction.user.username}.`);

    return replied;
}