const { InteractionType } = require("discord.js");

module.exports = async (client, interaction) => {
  if (interaction.type !== InteractionType.MessageComponent) return;

  const allowedCustomIds = ["play_now", "upcoming", "remove_song"];
  if (!allowedCustomIds.includes(interaction.customId)) return;

  // Interaksi `play.js` Hal itu ditangani oleh petugas penagih,
  // Jadi, inilah beberapa di antaranya reply/update Saya tidak ingin melakukannya

  // Jika interaksi bot tidak termasuk dalam cakupan pengumpul
  // Kemudian, kirimkan pesan default ini (sebagai cadangan)
  try {
    await interaction.reply({
      content: "❗This button is no longer active or already handled.",
      ephemeral: true,
    });
  } catch (e) {
    // Ignore already responded interaction
  }
};
