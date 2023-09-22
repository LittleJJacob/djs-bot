const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"rol-oluştur",
    description: '💙 Yeni Bir Rol Oluşturursun!',
    type:1,
    options: [
        {
            name:"isim",
            description:"Oluşturulucak Rolün Adı!",
            type:3,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<:emoji_23:1151213417038884874> | Rolleri Yönet Yetkin Yok!", ephemeral: true})
    const isim = interaction.options.getString('isim')
   interaction.guild.roles.create({name: isim})
    interaction.reply({content: "<:emoji_22:1151213400010010707> | Başarıyla **"+isim+"** Rolü Oluşturuldu."})
}

};
