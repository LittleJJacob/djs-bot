const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-tag",
    description: '💙 Sunucuya giren üyelere otomatik tag verir!',
    type:1,
    options: [
        {
            name:"tag",
            description:"Lütfen bir tag girin!",
            type:3,
            required:true
        },
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageNicknames)) return interaction.reply({content: "<:emoji_23:1151213417038884874> | İsimleri Yönet Yetkin Yok!", ephemeral: true})
    const tag = interaction.options.getString('tag')
    db.set(`ototag_${interaction.guild.id}`, tag)
    interaction.reply({content: "<:emoji_22:1151213400010010707> | Başarıyla tagı "+tag+" olarak ayarladım!"})
}

};
