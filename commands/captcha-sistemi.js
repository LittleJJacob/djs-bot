const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
const db = require("croxydb")
const Discord = require("discord.js")
module.exports = {
    name: "captcha-sistemi",
    description: "💙 Captcha sistemini ayarlarsın!",
    type: 1,
    options: [
        {
            name: "captcha-kanalı",
            description: "Captcha kanalını ayarlarsın!",
            type: 7,
            required: true,
            channel_types: [0]
        },
        {
            name: "rol",
            description: "Captcha rolünü ayarlarsın!",
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

        const kanal = interaction.options.getChannel('captcha-kanalı')
        const rol = interaction.options.getRole('rol')

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [yetki], ephemeral: true })

        const rcaptchaSystem = db.fetch(`rcaptcha_${interaction.guild.id}`)
        const rcaptchaDate = db.fetch(`rcaptchaDate_${interaction.guild.id}`)
        
        if (rcaptchaSystem && rcaptchaDate) {
            const date = new EmbedBuilder()
            .setDescription(`<:emoji_23:1151213417038884874> | Bu sistem <t:${parseInt(rcaptchaDate.date / 1000)}:R> önce açılmış!`)
        
        return interaction.reply({ embeds: [date] })
        }

        const basarili = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`<:emoji_22:1151213400010010707> | __**Captcha Sistemi**__ başarıyla ayarlandı!\n\n<:emoji_21:1151204901976821840> Captcha Kanalı: ${kanal}\n<:emoji_20:1151204867361218640> Captcha Rolü: ${rol}`)
            db.set(`rcaptcha_${interaction.guild.id}`, { kanal: kanal.id, rol: rol.id })
			db.set(`rcaptchaDate_${interaction.guild.id}`, { date: Date.now() })
            
        return interaction.reply({ embeds: [basarili], ephemeral: true }).catch((e) => { })

    }

};