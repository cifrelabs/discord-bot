import { ButtonStyle, ButtonBuilder } from "discord.js";
import { Constants } from "./constants.js";

const { Link } = Constants;

export const Buttons = {
    Documentation: new ButtonBuilder()
        .setLabel("Documentation 📖")
        .setStyle(ButtonStyle.Link)
        .setURL(Link.Documentation),
        
    Support: new ButtonBuilder()
        .setLabel("Donate ☕️")
        .setStyle(ButtonStyle.Link)
        .setURL(Link.KoFi),
}