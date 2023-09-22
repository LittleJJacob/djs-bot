const db = require("croxydb");

module.exports = {
  name: "kayıt-isim-sıfırla",
  description: "💙 Kayıt ismini sıfırlarsın!",
  options: [],
  
  run: async(client, interaction) => {

    const findDatabase = db.fetch(`kayıtlıuye_${interaction.user.id}`) ? true : false;

    if(findDatabase) {
      db.delete(`kayıtlıuye_${interaction.user.id}`)
      interaction.member.setNickname(`${interaction.user.username}`)

      return interaction.reply({ embeds: [{ description: "<:emoji_22:1151213400010010707> | İsminiz başarıyla sıfırlandı." }] })
    } else {
      return interaction.reply({ embeds: [{ description: "<:emoji_23:1151213417038884874> | İsminiz kayıt sisteminde kayıtlı değildir." }] })
    }
  }
}