const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const Discord = require("discord.js")
const db = require('croxydb')
module.exports = {
  name:"yasaklı-kelime",
  description: '💙 Yasaklı kelimeyi ayarlarsınız!',
  type:1,
  options: [
      {
          name:"kelime",
          description:"Lütfen bir kelime girin!",
          type:3,
          required:true
      },
     
  ],

  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({content: "<:emoji_22:1151213400010010707> | Mesajları Yönet Yetkin Yok!", ephemeral: true})
    const kelime = interaction.options.getString('kelime')
    db.push(`yasaklı_kelime_${interaction.guild.id}`, kelime)
interaction.reply({content: "<:emoji_23:1151213417038884874> | Başarıyla yasaklı kelimeyi **"+kelime+"** olarak ayarladım!"})
  }

};