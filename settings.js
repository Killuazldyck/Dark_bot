require("./all/module")

global.owner = "6282312934025"
global.namabot = "Base"
global.namaCreator = "Alwaysriky Dev"
global.autoJoin = false
global.antilink = false
global.versisc = "3.0.0"
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = ""
global.apikey = ""
global.capikey = ""
global.eggsnya = "15"
global.location = "1"
global.imageurl = "https://telegra.ph/file/a81976576df704cc80efa.jpg"
global.isLink = false
global.audionya = fs.readFileSync("./all/sound.mp3")
global.simbol = "ダ"
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = "Alwaysriky Dev" //GANTI AJ
global.author = "Alwaysriky Dev"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Bung, Ada Yang Berubah Di ${__filename}`))
	delete require.cache[file]
	require(file)
})