const { PermissionsBitField } = require("discord.js");
const db = require("croxydb")
module.exports = {
    name:"oto-rol",
    description: '💙 Yeni Gelenlere Otomatik Rol Verir!',
    type:1,
    options: [
        {
            name:"rol",
            description:"Lütfen bir rol etiketle!",
            type:8,
            required:true
        },
        {
            name:"bot-rol",
            description:"Lütfen bir rol etiketle!",
            type:8,
            required:true
        },
       
       
    ],
  run: async(client, interaction) => {

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({content: "<:emoji_23:1151213417038884874> | Rolleri Yönet Yetkin Yok!", ephemeral: true})
    const rol = interaction.options.getRole('rol')
    const bot = interaction.options.getRole('bot-rol')
    db.set(`botrol_${interaction.guild.id}`, bot.id)
    db.set(`otorol_${interaction.guild.id}`, rol.id)
    interaction.reply({content: "<:emoji_22:1151213400010010707> | Otorol Başarıyla <@&"+rol+"> Olarak Ayarlandı. Bot rolü <@&"+bot+"> olarak ayarlandı."})
}

};
