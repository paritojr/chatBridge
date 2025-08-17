import { servers, users } from "../utils";
import { client } from "../client";

export default {
  name: "servers",
  description: "list all linked servers",
  async execute(message) {

    if (users.some(u => u.id === message.author.id && u.admin === 1)) {
      const content = servers.map(s => {
        const server = client.guilds.cache.get(s.id);
        return `**${server.name}**: <#${s.channelId}>`;
      }).join("\n");

      if (content.length === 0) {
        return message.reply("No servers are linked.");
      }
      message.reply(content);
    }

  },
};
