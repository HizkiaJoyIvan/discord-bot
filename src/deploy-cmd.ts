import dotenv from "dotenv";
dotenv.config();
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { SlashCommandBuilder } from "@discordjs/builders";
import config from "./config";

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("Replies with pong"),
];

const rest = new REST({ version: "9" }).setToken(config.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Registering slash commands");
    await rest.put(
      Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID),
      {
        body: commands,
      }
    );
    console.log("New commands are registered")
  } catch (err) {
    console.log(err);
  }
})();
