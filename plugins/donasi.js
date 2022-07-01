let handler = async m => m.reply(`
╭─「 •Dana•Pulsa 」
│ •  [0812-5052-1455]
│ •  [0812-5052-1455]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
