
import { users, PREFIX, servers } from "../utils.js";
import { removeServer } from "../db.js";
import { removeServerCache } from "../utils.js";

export default {
  name: "remove",
  description: "remove a server from the bridge",
  async execute(message, args) {
    if (users.some(u => u.id === message.author.id && u.admin === 1)) {
      if (args.length < 1) {
        return message.reply(`Usage: ${PREFIX}remove <server_id>`);
      }
      const serverId = args[0];
      if (!/^\d+$/.test(serverId)) {
        return message.reply("Please provide a valid server ID.");
      }
      const server = servers.find(s => s.id === serverId);
      removeServer(serverId);
      removeServerCache(serverId);
      message.reply(`Server ${server.name} has been removed from the bridge.`);

    }
  },
};
