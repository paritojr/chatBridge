import { removeServer } from "../servers.js";

export default {
  name: "unlink",
  description: "unlink the current channel from the bridge",
  usage: "unlink",
  allowedRank: "serveradmin",
  async execute(message) {
    await removeServer(message.guild.id);

    message.reply("Channel unlinked successfully!");
  },
};
