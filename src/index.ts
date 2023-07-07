import config from "./config";
import { Client, Message, IntentsBitField, CommandInteraction } from "discord.js";

export const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_INTEGRATIONS",
    "DIRECT_MESSAGES"
  ],
});

client.once("ready", () => {
  console.log("Discord bot is ready");
});

client.on("interactionCreate", (interaction: CommandInteraction) => {
  if(!interaction.isCommand()) return;

  if(interaction.commandName === "ping") {
    interaction.reply("Pong")
  }
});


client.on("messageCreate", (message: Message) => {
  if(message.author.bot) return;
  if(message.content.startsWith("ping")) {
    message.reply('pong');
  }
});


client.login(config.DISCORD_TOKEN);
