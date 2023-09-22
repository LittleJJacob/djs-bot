const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "kayıt-sistemi",
    description: "💙 Kayıt sistemini ayarlarsın!",
    type: 1,
    options: [
        {
            name: "kayıt-kanalı",
            description: "Kayıt kanalını ayarlarsın!",
            type: 7,
            required: true,
            channel_types: [0]
        },
        {
            name: "kayıtlı-rol",
            description: "Kayıtlı rolünü ayarlarsın!",
            type: 8,
            required: true,
        },
        {
            name: "kayıtsız-rol",
            description: "Kayıtsız rolünü ayarlarsın!",
            type: 8,
            required: true,
        },
    ],
    // 
    run: async (client, interaction) => {

        const { user, customId, guild } = interaction;
        const yetki = new Discord.EmbedBuilder()
            .setColor("Red")
            .setDescription("<:emoji_23:1151213417038884874> | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!")

        const kayıtkanal = interaction.options.getChannel('kayıt-kanalı')
        const kayıtlırol = interaction.options.getRole('kayıtlı-rol')
        const kayıtsızrol = interaction.options.getRole('kayıtsız-rol')

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [yetki], ephemeral: true })
			
		        const kayitSistemi = db.fetch(`kayıtsistemi_${interaction.guild.id}`)
        const kayıtSistemiDate = db.fetch(`kayıtsistemiDate_${interaction.guild.id}`)
        
        if (kayitSistemi && kayıtSistemiDate) {
            const date = new EmbedBuilder()
            .setDescription(`<:emoji_23:1151213417038884874> | Bu sistem <t:${parseInt(kayıtSistemiDate.date / 1000)}:R> önce açılmış!`)
        
        return interaction.reply({ embeds: [date] })
        }

        const basarili = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`<:emoji_22:1151213400010010707> | __**Kayıt Sistemi**__ başarıyla ayarlandı!\n\n<:emoji_21:1151204901976821840> Kayıt Kanalı: ${kayıtkanal}\n<:emoji_20:1151204867361218640> Kayıtlı Rolü: ${kayıtlırol}\n<:emoji_20:1151204867361218640> Kayıtsız Rolü: ${kayıtsızrol}`)
            db.set(`kayıtsistemi_${interaction.guild.id}`, { kayıtkanal: kayıtkanal.id, kayıtlırol: kayıtlırol.id, kayıtsızrol: kayıtsızrol.id })
			db.set(`kayıtsistemiDate_${interaction.guild.id}`, { date: Date.now() } )

            
        return interaction.reply({ embeds: [basarili], ephemeral: true }).catch((e) => { })

    }

};