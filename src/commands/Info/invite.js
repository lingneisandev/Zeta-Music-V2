const {
  Message,
  EmbedBuilder,
  ButtonStyle,
  ButtonBuilder,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "invite me",
  category: "Info",
  cooldown: 5,

  run: async (client, message, args, prefix) => {

    const embed = new EmbedBuilder()
      .setColor("#00eeff")
      .setTitle("Invite ${client.user.username}")
      .setDescription("Invite me to your server for **high-quality music!**")// Thumbnail
      .setImage("https://i.imgur.com/SPtXR9d.png"); // Banner Image

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Invite ${client.user.username}")
        .setStyle(ButtonStyle.Link)
        .setURL(
          `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&integration_type=0&scope=bot`
        ),
      new ButtonBuilder()
        .setLabel("Support Server")
        .setStyle(ButtonStyle.Link)
        .setURL(client.config.ssLink)
    );

    message.reply({
      embeds: [embed],
      components: [row]
    });
  },
};
