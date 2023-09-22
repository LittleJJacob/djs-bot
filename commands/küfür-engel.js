const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
  name: "küfür-engel",
  description: "💙 Küfür Engel Sistemini Açıp Kapatırsın!",
  type: 1,
  options: [
    {
    type: 3,
    name: "seçenek",
    description: "Sistemi kapatacak mısın yoksa açacak mısın?",
    required: true,
    choices: [
      {
        name: "Aç",
        value: "ac"
      },
      {
        name: "Kapat",
        value: "kapat"
      }
    ]
  }
],

  run: async(client, interaction) => {
    const { user, guild, options } = interaction;
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<:emoji_23:1151213417038884874> | Rolleri Yönet Yetkin Yok!", ephemeral: true})
 
    const kufurEngelSystemTrue = options.getString("seçenek");
    const kufurEngelSystem = db.fetch(`kufurengel_${interaction.guild.id}`)


    switch(kufurEngelSystemTrue) {
      case "ac": {
                const kufurEngelSystem = db.fetch(`kufurengel_${interaction.guild.id}`)
        const kufurengelDate = db.fetch(`kufurengelDate_${interaction.guild.id}`)
        
        if (kufurEngelSystem && kufurengelDate) {
            const date = new EmbedBuilder()
            .setDescription(`<:emoji_22:1151213400010010707> | Bu sistem <t:${parseInt(kufurengelDate.date / 1000)}:R> önce açılmış!`)
        
        return interaction.reply({ embeds: [date] })
        }
  
        db.set(`kufurengel_${interaction.guild.id}`, true)
		db.set(`kufurengelDate_${interaction.guild.id}`, { date: Date.now() })
        return interaction.reply({ content: "<a:1149408550716711032:1150169060215115796> | Başarılı bir şekilde sistem açıldı!" });
      }
  
      case "kapat": {
        if(!kufurEngelSystem) return interaction.reply({ content: "<:emoji_23:1151213417038884874> | Bu sistem zaten kapalı?" });
  
        db.delete(`kufurengel_${interaction.guild.id}`)
		db.delete(`kufurengelDate_${interaction.guild.id}`)
        return interaction.reply({ content: "<:emoji_22:1151213400010010707> | Başarılı bir şekilde sistem kapatıldı!" });
      }
    }

  }

};
