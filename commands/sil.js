const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"sil",
    description: '💙 Sohbette istediğin kadar mesajı silersin!',
    type:1,
    options: [
        {
            name:"sayı",
            description:"Temizlencek Mesaj Sayısını Girin.",
            type:3,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply({content: "<:emoji_23:1151213417038884874> | Mesajları Yönet Yetkin Yok!", ephemeral: true})
    const sayi = interaction.options.getString('sayı')
    interaction.channel.bulkDelete(sayi)
    interaction.reply({content: "<:emoji_22:1151213400010010707> | Başarıyla belirtilen adet mesajı sildim."})
}

};
