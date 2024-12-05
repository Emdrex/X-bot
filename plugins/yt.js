const config = require("../config")
const l = console.log
const { smd, fetchJson,
  astroJson,
  fancytext,
  yt,
  getBuffer,
  smdBuffer,
  prefix,
  Config } = require("../lib")
const dl = require("@bochilteam/scraper")  
const ytdl = require("yt-search");
const fs = require("fs-extra")
var videotime = 6000 // 100 min
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require("../lib/functions")
smd({
    pattern: "yts",
    alias: ["ytsearch"],
    use: '.yts sameer kutti',
    react: "🔎",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename
}, async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('*Please give me words to search*')
try {
let yts = require("yt-search")
var arama = await yts(q);
} catch(e) {
    l(e)
return await conn.sendMessage(from , { text: '*Error !!*' }, { quoted: mek } )
}
var mesaj = '';
arama.all.map((video) => {
mesaj += ' *🖲️' + video.title + '*\n🔗 ' + video.url + '\n\n'
});
await conn.sendMessage(from , { text:  mesaj }, { quoted: mek } )
} catch (e) {
    l(e)
  reply('*Error !!*')
}
})

smd({
    pattern: "video2",
    alias: ["ytvideo","ytv","drama"],
    use: '.video sameer kanjr',
    react: "📽️",
    desc: "Search & download yt videos.",
    category: "download",
    filename: __filename

},

async (_0x213b75, q, _0x13be17) => {
try{
if (!q) return reply('*Please give me quary to download*')
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `*X-bot VIDEO DOWNLOADER 🛜*
*TITLE: ${anu.title}*

🔗𝐔𝐑𝐋 : ${anu.url}

🌐𝐃𝐔𝐑𝐀𝐓𝐈𝐎𝐍 : ${anu.timestamp}

📟𝐕𝐈𝐄𝐖𝐒: ${anu.views}


*X-ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ X*

*X-team  solo-X*


❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁`
await conn.sendMessage(from, { image: { url: anu.thumbnail }, caption: cap}, { quoted: mek })
const yt = await dl.youtubedl(anu.url).catch(async () => await dl.youtubedlv2(anu.url)) 
const yt2 = await dl.youtubedlv2(anu.url)
if (yt2.video['360p'].fileSizeH.includes('MB') && yt2.video['360p'].fileSizeH.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: '*This video too big !!*' }, { quoted: mek });
if (yt2.video['360p'].fileSizeH.includes('GB')) return await conn.sendMessage(from, { text: '*This video too big !!*' }, { quoted: mek });
let senda = await conn.sendMessage(from, { video: {url: await yt.video['360p'].download() }, caption: '*VIDEO BY X-bot*'}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda.key }})

if (yt2.video['720p'].fileSizeH.includes('MB') && yt2.video['720p'].fileSizeH.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: '*This video too big !!*' }, { quoted: mek });
if (yt2.video['720p'].fileSizeH.includes('GB')) return await conn.sendMessage(from, { text: '*This video too big !!*' }, { quoted: mek });
let senda1 = await conn.sendMessage(from, { video: {url: await yt.video['720p'].download() }, caption: '> ᴠɪᴅᴇᴏ ʙʏ X-ʙᴏᴛ ✅'}, { quoted: mek })  
await conn.sendMessage(from, { react: { text: '🎥', key: senda1.key }})

await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
    
} catch (e) {
  reply("*Not Found !*")
  l(e)
}
})

smd({
    pattern: "play2",
    alias: ["yta","song"],
    use: '.play koun umar',
    react: "🎧",
    desc: "Search & download yt song.",
    category: "download",
    filename: __filename
},

async(_0x213b75, q, _0x13be17) => {
try{
if (_0x13be17) return reply('Please give me quary to download')
let yts = require("yt-search")
let search = await yts(_0x13be17)
let anu = search.videos[0]
const cap = `*X-bot MUSIC DOWNLOADER 🛜*

TITLE: ${anu.title}

🔗𝐔𝐑𝐋 : ${anu.url}

🌐𝐃𝐔𝐑𝐀𝐓𝐈𝐎𝐍 : ${anu.timestamp}

📟𝐕𝐈𝐄𝐖𝐒: ${anu.views}


*X-ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ X*

*X-teams solo-X*


❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁❁`
await conn.sendMessage(from, { image: { url: anu.thumbnail }, caption: cap}, { quoted: mek })
const yt2 = await dl.youtubedl(anu.url)
if (yt2.audio['128kbps'].fileSizeH.includes('MB') && yt2.audio['128kbps'].fileSizeH.replace(' MB','') >= config.MAX_SIZE) return await conn.sendMessage(from, { text: '*This video too big !!*' }, { quoted: mek });
var du = await yt2.audio['128kbps'].download()
    let senda =  await conn.sendMessage(from, { document: { url : du }, mimetype: 'audio/mpeg', fileName: yt2.title + '.mp3',caption: '> ᴍᴜsɪᴄ ʙʏ X-ʙᴏᴛ ✅' }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '🎼', key: senda.key }})
    
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})

} catch (e) {
  reply("ERROR ")
  l(e)
}
})