const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-tag-kapat",
    description: '💙 Oto-tag sistemini kapatırsın!',
    type:1,
    options: [],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageNicknames)) return interaction.reply({content: "<:emoji_23:1151213417038884874> | İsimleri Yönet Yetkin Yok!", ephemeral: true})
    db.delete(`ototag_${interaction.guild.id}`)
    interaction.reply({content: "<:emoji_22:1151213400010010707> | Başarıyla sistemi sıfırladım!"})
}

};
