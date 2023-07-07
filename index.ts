import config from "./config";
import { Client, Message, IntentsBitField } from "discord.js";

export const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ],
});

client.once("ready", () => {
  console.log("Discord bot is ready");
});

client.on("messageCreate", (message: Message) => {
  console.log(message.content);
  if(message.author.bot) return;
  if(message.content.startsWith("ping")) {
    message.reply('pong');
  }
});

client.login(config.DISCORD_TOKEN);
