
import { removeServer, servers } from "../servers.js";
import { users } from "../users.js";
import { PREFIX } from "../utils.js";

export default {
  name: "remove",
  description: "remove a server from the bridge",
  usage: "remove <server_id>",
  allowedRank: "admin",
  async execute(message, args) {
    if (args.length < 1) {
      return message.reply(`Usage: ${PREFIX}remove <server_id>`);
    }
    const serverId = args[0];
    if (!/^\d+$/.test(serverId)) {
      return message.reply("Please provide a valid server ID.");
    }
    const server = servers.find((s) => s.id === serverId);
    removeServer(serverId);
  },
};
