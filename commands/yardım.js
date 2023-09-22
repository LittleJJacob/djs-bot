const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
const { createButton, deleteMessageButton } = require("../function/functions");
module.exports = {
  name: "yardım",
  description: "💙 Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setAuthor({ name: "Serius Yardım Menüsü", iconURL: client.user.displayAvatarURL({ dynamic: true })})
    .setTitle("・Hangi komutlarım hakkında bilgi almak istiyorsan o butona bas!")
    .setDescription("\n\n**<:emoji_2:1151204216308781147> Linkler**\n> <:emoji_20:1151204867361218640>・**Botun davet linki: [Tıkla](https://discord.com/api/oauth2/authorize?client_id=1150925347676753931&permissions=8&scope=bot%20applications.commands)**\n> <:emoji_15:1151204741775380500>・**Botun destek sunucusu: [Tıkla](https://discord.gg/BxqAUr3JQf)**\n> <:emoji_11:1151204441375133776>・**Botun gizlilik politikası: [Tıkla](https://serius-bot.vercel.app/privacy)**")
    .setColor('Blue')
    const row1 = new Discord.ActionRowBuilder()

    .addComponents(
        new Discord.ButtonBuilder()
            .setEmoji("1039607060775571476")
            .setLabel("Moderasyon")
            .setStyle(Discord.ButtonStyle.Secondary)
            .setCustomId("moderasyon_"+interaction.user.id)
    )

    .addComponents(
        new Discord.ButtonBuilder()
            .setEmoji("1039607052340834354")
            .setLabel("Kayıt")
            .setStyle(Discord.ButtonStyle.Secondary)
            .setCustomId("kayıt_"+interaction.user.id)
    )

    .addComponents(
      new Discord.ButtonBuilder()
          .setEmoji("1039607059357913098")
          .setLabel("Kullanıcı")
          .setStyle(Discord.ButtonStyle.Secondary)
          .setCustomId("kullanıcı_"+interaction.user.id)
  )
  .addComponents(
    new Discord.ButtonBuilder()
        .setEmoji("1039607040898781325")
        .setLabel("Sistemler")
        .setStyle(Discord.ButtonStyle.Secondary)
        .setCustomId("sistemler_"+interaction.user.id)
)

  const row2 = new Discord.ActionRowBuilder()
  .addComponents(
            new Discord.ButtonBuilder()
            .setLabel("Koruma")
            .setStyle(Discord.ButtonStyle.Secondary)
            .setEmoji("1044325545925672976")
            .setCustomId("korumasystem_"+interaction.user.id),
  )
  .addComponents(
    new Discord.ButtonBuilder()
        .setLabel("ㅤㅤㅤ")
        .setStyle(Discord.ButtonStyle.Secondary)
        .setDisabled(true)
        .setCustomId("süsbuton2")
  )
  .addComponents(
    new Discord.ButtonBuilder()
        .setLabel("Ana Sayfa")
        .setStyle(Discord.ButtonStyle.Secondary)
        .setEmoji('1044325564636471397')
        .setDisabled(true)
        .setCustomId("anasayfa_"+interaction.user.id)
  )  
  .addComponents(
    new Discord.ButtonBuilder()
        .setLabel("ㅤㅤㅤ")
        .setStyle(Discord.ButtonStyle.Secondary)
        .setDisabled(true)
        .setCustomId("süsbuton3")
  )
  .addComponents(
    new Discord.ButtonBuilder()
        .setEmoji("1039607063443161158")
        .setLabel(" ")
        .setStyle(Discord.ButtonStyle.Secondary)
        .setCustomId(".clearMessageButton_"+interaction.user.id)
)
   
   interaction.reply({embeds: [embed], components: [row1, row2]}).then(msg => {
    msg.createMessageComponentCollector(user => user.clicker.user.id == interaction.user.id).on('collect', async (button) => {

   })
   })
  }  

};