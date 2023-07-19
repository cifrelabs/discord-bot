/**
 * Listens to every event where a message is sent or created in the Guild
 * @async
 * @method
 * @param {Message} message the message sent
 */
export const messageCreateListener = async (message) => {
    // What to do when a message is sent
    
}

/**
 * Listens to every reaction added in any message in the Guild
 * @async
 * @method
 * @param {ReactionManager} reaction - The reaction that was added
 * @param {User} user - The user that added the reaction
 */
export const messageReactionAddListener = async (reaction, user) => {
	// What to do when a reaction is added
	
}