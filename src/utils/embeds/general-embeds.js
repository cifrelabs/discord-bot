import { keys } from "../keys.js";

// You may use constant values from Keys
const { mainColor } = keys.colors;

export const successEmbed = {
    title: `Hello World!`,
    description: '**You did it!** If you see this, you followed all of the steps perfectly and the Bot is working perfectly well!\n\nNow for your next tasks:',
    fields: [
        {
            name: '_ _\n1. Create more commands!',
            value: `Learn to do it by going to this [documentation.](https://github.com/cifrelabs/discord-bot-template#creating-a-command)`,
        },
        {
            name: '_ _\n2. Share this guide to your friends!',
            value: `You're a kind person, right? Share the gospel to your friends! Here's the link: https://github.com/cifrelabs/discord-bot-template`,
        },
    ],
    color: mainColor,
    image: {
        "url": "https://c.tenor.com/8qtOK6_iNRMAAAAC/proud-ron-swanson.gif"
    }
}

export const errorEmbed = {
    title: `I don't feel so good Mr. Stark...`,
    description: `I encountered an error. Sorry 'bout that.`,
    color: 'RED',
    image: {
        "url": "https://c.tenor.com/EEeuMx1OE-gAAAAd/oof-iron.gif"
    }
}