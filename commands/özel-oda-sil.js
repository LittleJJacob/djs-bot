const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"özel-oda-sil",
    description: '💙 Özel odanı silersin.',
    type:1,
    options: [],
  run: async(client, interaction) => {

    let odasi = db.fetch(`oda_${interaction.user.id}`)
    if (!odasi) return interaction.reply("<:emoji_23:1151213417038884874> | Sana ait bir oda bulamadım!")
    interaction.reply("<:emoji_22:1151213400010010707> | Odan Başarıyla Silindi!")
    interaction.guild.channels.delete(odasi)
}

};