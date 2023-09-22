const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"giriş-çıkış-kapat",
    description: '💙 Giriş Çıkış Sistemini kapatırsın!',
    type:1,
    options: [],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.reply({content: "<:emoji_23:1151213417038884874> | Kanalları Yönet Yetkin Yok!", ephemeral: true})
   db.delete(`hgbb_${interaction.guild.id}`)
   interaction.reply("<:emoji_22:1151213400010010707> | Hoşgeldin Güle Güle Kanalı Başarıyla Sıfırlandı!")
}

};
