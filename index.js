
//REMAKE BT ISAL T-BOT
//MAKASIH DAH PAKE 
//HEXAGON NGENTOD EMANG
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const imageToBase64 = require('image-to-base64')
const base64Img = require('base64-img')
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const ig = require('insta-fetcher')
const fetch = require('node-fetch')
const { EmojiAPI } = require("emoji-api");
const zrapi = require('zrapi')
const emoji = new EmojiAPI()
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const imgbb = require('imgbb-uploader')
const { uploadimg } = require('./lib/uploadimg')
const audionye = JSON.parse(fs.readFileSync('./src/vn.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv } = require('./lib/ytdl')
const antilink = JSON.parse(fs.readFileSync('./src/group/antilink.json'))
const { virtex } = require('./src2/virtex')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")


//Ampikey
zeksapi = 'isalselfbot' //free apikey from isal
odc = 'AdulAlhyReal' //buy premium key in https://onlydevcity.herokuapp.com/price
lolfree = '0a86c10bf283c08bbbe86d40' //register di http://api.lolhuman.xyz untuk mendapatkan apikey free
lolprem = 'BELI LAH' //buy premium key in http://api.lolhuman.xyz
//INGFO 
prefix = '.'
fake = 'Muachh 💋'
numbernye = '0'
banChats = true
targetpc = '994406496493'
//===================================================//
const hexa = new WAConnection()
hexa.on('qr', qr => {
	qrcode.generate(qr, { small: true })
	console.log(`[ ${time} ] SCAN QR,SELFBOT HEXAGONZ REMAKE ISAL`)
})
hexa.on('open', () => {
	const authInfo = hexa.base64EncodedAuthInfo()
	console.log(`Succes`)
	fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && hexa.loadAuthInfo('./session.json')
hexa.connect();
//=================================================//
hexa.on('chat-update', async (mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
         mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
const ar = args.map((v) => v.toLowerCase())
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'


        //MESS
		mess = {
			wait: 'Otewe beb',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu, gausah buta map',
			error: {
				stick: 'bukan sticker itu cok',
				Iv: 'Linknya error su'
			},
			only: {
				group: 'Khusus grup sayang',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:mek})
        }

			if (messagesC.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        hexa.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`*Link Group Terdeteksi* maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		        setTimeout( () => {
			        hexa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        hexa.updatePresence(from, Presence.composing)
			        reply("1detik")
		        }, 4000)
		        setTimeout( () => {
			        hexa.updatePresence(from, Presence.composing)
		                reply("2detik")
		        }, 3000)
		        setTimeout( () => {
			        hexa.updatePresence(from, Presence.composing)
			        reply("3detik")
		        }, 2000)
		        setTimeout( () => {
			        hexa.updatePresence(from, Presence.composing)
			        reply("4detik")
		        }, 1000)
		        setTimeout( () => {
			        hexa.updatePresence(from, Presence.composing)
			        reply("5detik")
		        }, 0)
	        }

        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
		var imgbb = require('imgbb-uploader')
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return

switch (command) {
    case prefix+ 'menu':
    case prefix+ 'help':
    	var menu = `Hai ${pushname}
Prefix : 「 ${prefix} 」
Name	: 𝐒𝐄𝐋𝐅𝐁𝐎𝐓
*</MAKER>*
◈ _${prefix}sticker_
◈ _${prefix}swm_ <author|packname>
◈ _${prefix}take_ <author|packname>
◈ _${prefix}fdeface_
◈ _${prefix}nulis_ <text>
◈ _${prefix}emoji_
◈ _${prefix}shine_ <text>
◈ _${prefix}hbd_ <text>
◈ _${prefix}glitch_ <text|text>
◈ _${prefix}gtav_  <reply img>
◈ _${prefix}qrcode_<text>
◈ _${prefix}barcode_  <text>
*</CONVERT>*
◈ _${prefix}url_
◈ _${prefix}toimg_
◈ _${prefix}tomp3_
*</UP STORY>*
◈ _${prefix}upswteks_
◈ _${prefix}upswimage_
◈ _${prefix}upswvideo_
*</FUN>*
◈ _${prefix}spamgmail_
◈ _${prefix}spamcall_
◈ _${prefix}dorking_
◈ _${prefix}quotes_
◈ _${prefix}estetik_
◈ _${prefix}fitnah_
◈ _${prefix}fitnahpc_
◈ _${prefix}kontak_
◈ _${prefix}caklontong_
◈ _${prefix}tebakgambar_
◈ _${prefix}darkjoke_
◈ _${prefix}memeindo_
◈ _${prefix}fml_
*</TOD>*
◈ _${prefix}truth_
◈ _${prefix}dare_
*</TAG>*
◈ _${prefix}hidetag_
◈ _${prefix}kontag_
◈ _${prefix}sticktag_
*</DOWNLOAD>*
◈ _${prefix}ytsearch_ <query>
◈ _${prefix}igstalk_ <query>
◈ _${prefix}play_ <query>
◈ _${prefix}video_ <query>
◈ _${prefix}ytmp3_ <link>
◈ _${prefix}ytmp4_ <link>
◈ _${prefix}ig_ <link>
◈ _${prefix}twitter_ <link>
◈ _${prefix}tiktok_ <link>
◈ _${prefix}fb_ <link>
◈ _${prefix}brainly_ <query>
◈ _${prefix}image_ <query>
◈ _${prefix}igstory <query>
◈ _${prefix}sfile_ <query>
◈ _${prefix}sfiledown_ <query>
◈ _${prefix}spotify_ <url>
*</SEARCHING>*
◈ _${prefix}carispotify <query>
◈ _${prefix}jadwalsholat_ <daerah>
◈ _${prefix}tiktokmusic_ <query>
◈ _${prefix}stickerwa_ <query>
◈ _${prefix}igstory_
◈ _${prefix}telesticker_
◈ _${prefix}translate_ <id text>
◈ _${prefix}film_
◈ _${prefix}igsearch_
◈ _${prefix}liputan_
◈ _${prefix}foxnews_
◈ _${prefix}tribunnews_
◈ _${prefix}playstore_ <apk>
◈ _${prefix}apkpure_ <apk>
◈ _${prefix}happymod_ <apk>
*</ISLAMIC>*
◈ _${prefix}quran_
◈ _${prefix}asmaulhusna_
◈ _${prefix}surah_ <nomer>
◈ _${prefix}asmaulhusna_
*</OTHER>*
◈ _${prefix}bc_
◈ _${prefix}delete/d/del_
◈ _${prefix}antilink_ <1/0>
◈ _${prefix}self_
◈ _${prefix}public_
◈ _${prefix}setthumb_
◈ _${prefix}settarget_
◈ _${prefix}setfakeimg_
◈ _${prefix}setreply_
◈ _${prefix}ping_
◈ _${prefix}join_
◈ _${prefix}getpic_
◈ _${prefix}fakeaddress_
◈ _${prefix}term_ <code>
◈ _x_ <code>
Bigs Thanks :
➢Hexagonz
➢Fazone
➢Adul
❏ *𝐒𝐄𝐋𝐅𝐁𝐎𝐓* ❏`
        	fakestatus(menu)
           	break
    case prefix+ 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case prefix+ 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case prefix+ 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case prefix+ 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case prefix+ 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
case prefix+'togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        hexa.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: mek})
                                }
                                break
    case prefix+ 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
            case prefix+'upname':
                anu = body.slice(8)
                hexa.updateProfileName(anu)
                reply(`Succes change name to : ${anu}`)
                break
case prefix+'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await hexa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/vn.json', JSON.stringify(audionye))
				hexa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
				break
case prefix+'vn':
				namastc = body.slice(4)
				try {
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				hexa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case prefix+'listvn':
			case prefix+'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				break
    case prefix+ 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case prefix+ 'take':
    case prefix+ 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELFBOT`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `iSal`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
	case prefix+ 'stikerwm':
	case prefix+ 'stickerwm':
    case prefix+ 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case prefix+ 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case prefix+ 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case prefix+ 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case prefix+ 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case prefix+ 'public':
          	if (!mek.key.fromMe) return fakestatus('𝐒𝐄𝐋𝐅𝐁𝐎𝐓')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *𝙋𝙐𝘽𝙇𝙄𝘾 𝙈𝙊𝘿𝙀 」`)
          	break
	case prefix+ 'self':
          	if (!mek.key.fromMe) return fakestatus('𝐒𝐄𝐋𝐅𝐁𝐎𝐓')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 𝙎𝙀𝙇𝙁 𝙈𝙊𝘿𝙀 」`)
          	break
 	case prefix+ 'hidetag':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
	case prefix+ 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `𝐏𝐋𝐀𝐘 𝐌𝐔𝐒𝐈𝐂\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case prefix+ 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `𝐏𝐋𝐀𝐘 𝐕𝐈𝐃𝐄𝐎\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case prefix+ 'sticker': 
    case prefix+ 'stiker':
    case prefix+ 'sg':
    case prefix+ 's':
          if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            await ffmpeg(`./${media}`)
              .input(media)
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply(mess.error.stick)
              })
              .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, { quoted:mek}) 
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
              .inputFormat(media.split('.')[1])
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
              })
              .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:mek})
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
              .inputFormat(media.split('.')[1])
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                reply(`Yah gagal, coba ulangi ^_^`)
              })
              .on('end', function () {
                console.log('Finish')
                buff = fs.readFileSync(ran)
                hexa.sendMessage(from, buff, sticker,{quoted:mek})
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Kirim gambaar dengan caption ${prefix}sticker atau reply/tag gambar`)
          	}
          	break              
    case prefix+ 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case prefix+ 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐒𝐄𝐀𝐑𝐂𝐇 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *𝐒𝐄𝐋𝐅𝐁𝐎𝐓*'
    		await fakethumb(tbuff,ytresult)
			break
	case prefix+ 'setreply':
	case prefix+ 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case prefix+'setprefix':
					if (args.length < 1) return
					prefix = args[0]
					fakegroup(`𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗱𝗶 𝘂𝗯𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 : ${prefix}`)
					break
			break
	case prefix+ 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case prefix+ 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case prefix+ 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `𝐘𝐓𝐌𝐏𝟒 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
case prefix+'emoji':
                ngontol = body.slice(6)
				anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(ngontol)}&type=apple`, {method: 'get'})
				hexa.sendMessage(from, anu, image, {quoted : mek})
				case prefix+'ttp': //By adul
							pngttp = './temp/ttp.png'

							webpng = './temp/ttp.webp'
							const ttptext = body.slice(5)
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							console.log("wait")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							buffer = fs.readFileSync(webpng)
							hexa.sendMessage(from, buffer, sticker)
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							});
							break
	case prefix+ 'emojgi':
			fakegroup('otewe')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case prefix+ 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `𝐘𝐓𝐌𝐏𝟑 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case prefix+ 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args[0];
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            for (var i = 0; i < (result.length < 3 ? result.length : 3); i++) {
            var get = got(result[i].url);
            var stream = get.buffer();
            stream.then(async (images) => {
            await fakethumb(images);
            });
            }
            });
            break
    case prefix+ 'tiktok':
            if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            reply(mess.wait)
            zrapi.keeptiktok(`${args[0]}`)
            .then(data => {
            da = `${data}`
            axios.get(`https://tinyurl.com/api-create.php?url=${da}`)
            .then(async (a) => {
            sendMediaURL(from,da,`𝐓𝐈𝐊𝐓𝐎𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃\n\n*DONE*\n\n*Link* : ${a.data}`) 
            })
            })
            break
    case prefix+ 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 𝘽𝙍𝘼𝙄𝙉𝙇𝙔 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case prefix+'ig':
            if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            reply(mess.wait)
            zrapi.instagram(`${args[0]}`)
            .then(a => {
            da = `${a.link}`
            axios.get(`https://tinyurl.com/api-create.php?url=${da}`)
            .then(async (s) => {
            sendMediaURL(from,da,`𝐈𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃\n\n*DONE*\n\n*Link* : ${s.data}`) 
            })
            })
            break
case prefix+'igdl':
		            if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${lolprem}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    hexa.sendMessage(from, ini_buffer, ini_type, { quoted: mek})
                    break
    case prefix+ 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `𝐈𝐆 𝐒𝐓𝐀𝐋𝐊𝐈𝐍𝐆\n\n*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case prefix+ 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`𝐅𝐁 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃\n\n*Title* : ${tek}\n\n*Link* : ${ten}`)
            })
            break    
	case prefix+ 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case prefix+ 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case prefix+'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'DONE')
            })
            break
    case prefix+ 'runtime':
    case prefix+ 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
			
//============NEWS============//
	case prefix+'tahta':
				//UPDATE MR.108P
				if (args.length < 1) return reply(`Textnya mana bos`)
				dapuhy = body.slice(7)
				fakegroup(mess.wait)
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=${zeksapi}`)
				hexa.sendMessage(from, asu, image, {quoted: mek})
				break
	case prefix+'spamcall':
			reply(mess.wait)
          	call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			hexa.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			break  
	case prefix+'spamgmail':
			reply(mess.wait)
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			hexa.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			break 
	case prefix+'fml':
					reply(mess.wait)
					data = await fetchJson(`https://api.zeks.xyz/api/fml?apikey=${zeksapi}`)
					hasil = data.result
					fakegroup(hasil)
					break
	case prefix+'stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolprem}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolprem}&img=${x}`)
                        hexa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
			case prefix+'breakwall':
				buffer = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${body.slice(11)}`)
				hexa.sendMessage(from, image, {quoted: mek})
				fakethumb(buffer,'Nih bwang')
				break
				case prefix+'spotify':
		             if (args.length == 0) return fakegroup(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolprem}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    hexa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    hexa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek})
                    break
                case prefix+'carispotify':
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolprem}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    fakegroup(ini_txt)
                    break
				case prefix+'qrcode':
					buffer = await getBuffer(`https://api.zeks.xyz/api/qrencode?apikey=apivinz&text=${body.slice(8)}`)
					hexa.sendMessage(from, image, {quoted: mek})
					fakethumb(buffer,'NIH')
					break
				case prefix+'barcode':
					buffer = await getBuffer(`https://api.zeks.xyz/api/barcode?apikey=apivinz&text=${body.slice(9)}`)
					hexa.sendMessage(from, buffer, image, fakethumb, {quoted: mek, caption: '*Nih*'})
					break
case prefix+'tourl':
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await hexa.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("db9463198a583f7a419835dfd8b44fe5", owgi)
        teks = `${anu.display_url}`
reply(teks)
}
break

				case prefix+'urlshort':
				case prefix+'url':
						anu = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${args[0]}&apikey=${zeksapi}`, {method: 'get'})
						teks = `${anu.result}`
						fakegroup(teks.trim())
						break
						case prefix+'komik':
						anu = await fetchJson(`https://api.zeks.xyz/api/bacakomik?apikey=${zeksapi}&q=${body.slice(7)}`, {method: 'get'})
						teks = '*Komik Search*\n'
											for (let i of anu.result) {
												teks += `Nama Komik : ${i.title}
						Rating : ${i.rating}
						Url : ${i.url}
						`
						}
						fakegroup(teks.trim())
						break
				case prefix+'surah':
						if (args.length < 1) return reply('Surah ke berapa?')
						anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${body.slice(7)}&apikey=${zeksapi}`, {method: 'get'})
						teks2 = `Surah : ${anu.surah}
						Arab : ${anu.asma}
						Surah Nomor : ${anu.no}
						Diturunkan di : ${anu.type}
						Arti : ${anu.ket}
						Jumlah ayat : ${anu.jumlah_ayat}`
						hexa.sendMessage(from, teks2, text, {quoted: mek})
						teks = '*Ayat*\n'
											for (let i of anu.ayat) {
						teks += `Ayat ke : ${i.number}
						Arab : ${i.text}
						Latin EN : ${i.translation_en}
						Latin ID : ${i.translation_id}`
						}
						fakegroup(teks.trim())
						buffer = await getBuffer(anu.audio)
						hexa.sendMessage(from, buffer, audio, {quoted: mek})
						break
						case prefix+'happymod':
						anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=${zeksapi}&q=${body.slice(10)}`, {method: 'get'})
						teks = '*Happy Mod Search*\n'
											for (let i of anu.result) {
												teks += `Nama Apk : ${i.title}
						Rating : ${i.rating}
						Url : ${i.url}
						`
						}
						fakegroup(teks.trim())
						break
				case prefix+'setzeksapi':
					zeksapi = args[0]
					reply(`Apikey berhasil di ubah menjadi : ${zeksapi}`)
					break 
				case prefix+'setlolprem':
					lolprem = args[0]
					reply(`Apikey berhasil di ubah menjadi : ${lolprem}`)
					break 
				case prefix+'setlolfree':
					lolfree = args[0]
					reply(`Apikey berhasil di ubah menjadi : ${lolfree}`)
					break 
				case prefix+'setodc':
					odc = args[0]
					reply(`Apikey berhasil di ubah menjadi : ${odc}`)
					break 
                case prefix+'asupan':
                anu = await fetchJson(`http://lolhuman.herokuapp.com/api/asupan?apikey=${lolprem}`, {method: 'get'})
                buff = await getBuffer(anu.result)
                hexa.sendMessage(from, buff, video, {caption: `Succes`})
                    break
                case prefix+'gtav':
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await hexa.downloadAndSaveMediaMessage(enmedia)
					anu = await imgbb("db9463198a583f7a419835dfd8b44fe5", media)
					teks = `${anu.display_url}`
					foto = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${teks}`, {method: 'get'})
					hexa.sendMessage(from, foto, image, {quoted: mek})
					break

				case prefix+'trigger'://error
			             var imgbb = require('imgbb-uploader')
                     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                         reply(mess.wait)
                        owgi = await hexa.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("db9463198a583f7a419835dfd8b44fe5", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply(mess.error.stick)
                                nobg = fs.readFileSync(rano)
                                 hexa.sendMessage(from, nobg, sticker, {quoted: mek})
                                fs.unlinkSync(rano)
                        })
                    
                             } else {
                                 reply('use picture!')
                          }
                          break 
        case prefix+'becrypt':
					becry = `${body.slice(9)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=TrzDwA-gT8ZNu-xJWUZT-TAUYD5-W6HIOV&string=${becry}`, {method: 'get'})
					hexa.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					break 
		case prefix+'tiktokmusic':
		            if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolprem}&url=${ini_link}`)
                    hexa.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})
                    break
		case prefix+'jadwalsholat':
		             if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolprem}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
				case 'wetglass': //error
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case prefix+'textbyname':
                case prefix+'writegalacy':
                case prefix+'galaxybat':
                case prefix+'snow3d':
                case prefix+'birthdayday':
                case prefix+'goldplaybutton':
                case prefix+'silverplaybutton':
                case prefix+'freefire':
                    if (args.length == 1) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} lindow`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolprem}&text=${txt}`)
                    hexa.sendMessage(from, buffer, image, { quoted:{ key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/ngontol.jpeg')} } }, caption: 'Nih hasilnya kak...'})
                    break
		        case prefix+'shadow':  //error
                case prefix+'cup':
                case prefix+'cup1':
                case prefix+'romance':
                case prefix+'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flcamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 1) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} lindow`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolprem}&text=${txt}`)
                    hexa.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/ngontol.jpeg')} } }, caption: 'Nih hasilnya kak...'})
                    break
                case prefix+'tiktokstalk':
                    user = body.slice(13)
                    data = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${user}?apikey=${lolprem}`, {method: 'get'})
                    teks = `𝐓𝐈𝐊𝐓𝐎𝐊 𝐒𝐓𝐀𝐋𝐊\n\*Username :* ${data.result.username}\n\n*Nickname :* ${data.result.nickname}\n\n*Bio :* ${data.result.bio}\n\n*Followers :* ${data.result.followers}\n\n*Following :* ${data.result.followings}\n\n*Like count :* ${data.result.likes}\n\n*Video count :* ${data.result.video}`
                    pp = await getBuffer(data.result.user_picture)
                    hexa.sendMessage(from, pp, image, {quoted: mek, caption: teks})
                    break
			     case prefix+'antilink':
						if (args.length < 1) return reply('type 1 to activate the antilink feature')
						if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group is active')
						antilink.push(from)
						fs.writeFileSync('./src/group/antilink.json', JSON.stringify(antilink))
						reply('Success activate antilink group in this group')
						hexa.sendMessage(from,`Attention to all member, antilink active, if you send a group link, you will be kicked from the group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Antilink status : disable')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/group/antilink.json', JSON.stringify(antilink))
						reply('Success disable antilink group in this group')
					} else {
						reply('1 to activate, 0 to deactivate')
					}
					break
					
					case prefix+'spamtag':
					  
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mantap = mentioned
for(let i = 0; i < 10; i++){
opsi = { 
 text : `woiii ${mantap}`,
contextInfo : {mentionedJid: [mantap.split('@')[1]+'@s.whatsapp.net']}
}
hexa.sendMessage(from, opsi, text)
}
break

case prefix+'kicktime':

											if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 hexa.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 hexa.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 hexa.sendMessage(from, '_selamat tinggal Titip gorengan Ya jangan Balik Lagi_ ....', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 hexa.sendMessage(from, '_ucapkan selamat tinggal mwah mwah_ …', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 hexa.sendMessage(from, '_ciiee calon bakalan dikick_  …', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 hexa.sendMessage(from, 'siap siap ya Gua Kick nih', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
			case prefix+'delchat'://notwork
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                hexa.modifyChat(from, ChatModification.delete)
                break
			case prefix+'delete'://work
			case prefix+'del':
			case prefix+'d':
				fakegroup('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
		        hexa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
		case prefix+'truth':
			fakegroup(`Harus jujur ya sayang`)
			const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
			const ttrth = trut[Math.floor(Math.random() * trut.length)]
			truteh = await getBuffer(`https://i.ibb.co/b2ZTKqG/IMG-20210413-WA0049.jpg`)
			hexa.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: mek })
			break
		case prefix+'dare':
			fakegroup(`Harus jujur ya sayang`)
			const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
			const der = dare[Math.floor(Math.random() * dare.length)]
			tod = await getBuffer(`https://i.ibb.co/b2ZTKqG/IMG-20210413-WA0049.jpg`)
			hexa.sendMessage(from, tod, image, { quoted: mek, caption: '*DARE*\n\n'+ der })
			break
	case prefix+'bc':
		            list_chat = await hexa.chats.all()
                    ini_text = args.join(" ")
                    for (let chat of list_chat) {
                        sendMess(chat.jid, ini_text)
                    }
                    break
	case prefix+'asmaulhusna':
					get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolprem}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    fakegroup(ini_txt)
                    break
	case prefix+'jadwaltv':
            channel = args[0]
            tvnow = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolprem}`, {method: 'get'})
            tvnow = tvnow.result
            txt = `Jadwal TV ${channel.toUpperCase()}\n\n`
            for (var x in tvnow) {
              txt += `${x} - ${tvnow[x]}\n`
            }
            fakegroup(txt)
            break
	case prefix+'sfire'://error
             var imgbb = require('imgbb-uploader')
                                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        reply(mess.wait)
                                        owgi = await hexa.downloadAndSaveMediaMessage(ger)
                                        anu = await imgbb("e7cdf2c7806ce29fc366e6cc0380a23f", owgi)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = await fetchJson(`http://api.lolhuman.xyz/api/editor/triggered?apikey=${lolprem}&img=${teks}`,{method:'get'})                   
                      exec(`wget ${anu1ll.result} -O ${ranpll} && ffmpeg -i ${ranpll} -vcodec libwebp -filter:v fps=fps=10 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoll}`, (err) => {                     
                                                fs.unlinkSync(ranpll)
                                                if (err) return reply(mess.error.stick)
                                                buffer = fs.readFileSync(ranoll)
                                                hexa.sendMessage(from, buffer, sticker, { contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_STICKER FIRE_*' } } }) 
                                                fs.unlinkSync(ranoll)
                                        })                                   
                                             } else {
                                                reply('Gunakan foto!')
                                          }           
                                          break
	case prefix+'tagme':
                var blk = body.slice(7)
			    me = hexa.user
				const tagg = {
					text: `@${me.jid.split('@')[0]} ${blk}`,
					contextInfo: { mentionedJid: [me.jid] }
				}
				fakegroup(tagg)
				break
				case prefix+'tagall':

                members_id = []
		teks = (args.length > 1) ? budy.slice(8).trim() : ''
	        teks += '\n\n'
	        for (let mem of groupMembers) {
		teks += `┣➥ @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
		}
		mentions(teks, members_id, true)
		break
	case prefix+'dorking':
					dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					var ko = '1'
					for (let i = 0; i < anu.result.length; i++) { 
					 teks = `${ko}\n${anu.result[i]}`
					 ko++
					}
					fakegroup(teks)
					break
	case prefix+'apkpure':
			anu = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
			teks = '*Apk Pure Search*\n'
								for (let i of anu.result) {
									teks += `Nama Apk : ${i.title}
			Url : ${i.url}
			Rating : ${i.rating}
			`
			}
			fakegroup(teks.trim())
			break
	case prefix+'shopee':
			anu = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${body.slice(9)}`, {method: 'get'})
			teks = '*SHOPEE*\n'
								for (let i of anu.data) {
									teks += `Nama barang : ${i.name}
			Harga : ${i.harga}
			Terjual : ${i.terjual}
			Lokasi : ${i.location}
			Cover : ${i.cover}
			Stock : ${i.stock}
			Informasi : ${i.information}
			Url : ${i.url}
			Deskripsi : ${i.desc}
			`
			}
			fakegroup(teks.trim())
			break
	case prefix+'tribunnews':
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '*Tribun News*\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Time* : ${i.time}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}`
					}
					fakethumb(teks.trim())
					break
	case prefix+'liputan':
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '*Liputan*\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}`
					}
					fakethumb(teks.trim())
					break
	case prefix+'foxnews':
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '*Fox News*\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Time* : ${i.time}\n*Content* : ${i.content}`
					}
					fakethumb(teks.trim())
					break
	case prefix+'pantun':
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					fakegroup(anu.result.pantun)
					break
	case prefix+'quotes':
					data = await fetchJson(`https://api.zeks.xyz/api/quote?apikey=apivinz`)
					cop = `Quotes : ${data.result.quotes}\n\nAuthor : ${data.result.author}`
					fakegroup(cop)
					break
	case prefix+'estetik':			
					
					anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result.result)
					hexa.sendMessage(from, buffer, image, {quoted: mek})
					break
	case prefix+'darkjokes':
	case prefix+'darkjoke':	
					anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					hexa.sendMessage(from, buffer, image, {quoted: mek})
					break
	case prefix+'meme':
	case prefix+'memeindo':		
					
					anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					hexa.sendMessage(from, buffer, image, {quoted: mek})
					break
	case prefix+'quran':
					anu = await fetchJson(`https://api.zeks.xyz/api/randomquran?apikey=apivinz`, {method: 'get'})
					quran = `*->* ${anu.result.arti}\n*->* ${anu.result.asma}\n*->* ${anu.result.ayat}\n*->* ${anu.result.keterangan}\n*->* ${anu.result.nama}\n*->* ${anu.result.nomor}\n*->* ${anu.result.rukuk}\n*->* ${anu.result.type}\n*->* ${anu.result.urut}`
					hexa.sendMessage(from, quran, text, {quoted: mek})
					break
	case prefix+'film':
					anu = await fetchJson(`https://api.zeks.xyz/api/film?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '*Film Search*\n'
										for (let i of anu.result) {
											teks += `Nama Film : ${i.title}
					Url : ${i.url}
					`
					}
					fakegroup(teks.trim())
					break
	case prefix+'igsearch':
					anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${body.slice(8)}`, {method: 'get'})
					teks = '*Instagram Search*\n'
										for (let i of anu.result) {
											teks += `Username : ${i.username}
					Private : ${i.private_user}
					Verified : ${i.verified_user}
					Link : https://www.instagram.com/${i.username}
					`
					}
					fakegroup(teks.trim())
					break
	case prefix+'translate':
	              if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolprem}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
	case prefix+'telesticker':
	case prefix+'tstik':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolprem}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        hexa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
	case prefix+'igstory':
					anu = await fetchJson(`https://api.zeks.xyz/api/igs?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
					teks = '*IG STORY*\n'
										for (let i of anu.data) {
											teks += `Username : ${anu.username}
					Total story : ${anu.stories_count}
					Tipe : ${i.type}
					Story : ${i.url}
					Swipe Up Link : ${i.swipeUpLink}`
					}
					fakegroup(teks.trim())
					break
	case prefix+'nulis':
					fakegroup(mess.wait)
					teks = body.slice(7)
					buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
					hexa.sendMessage(from, buffer, image, {quoted: mek})
					break
	case prefix+'hbd': // Update By RzkyO & ItsmeikyXSec404				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(4)
				fakegroup(mess.wait)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro10?text=${ct}&theme=birthday&apikey=${odc}`)
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: mek})
				break
	case prefix+'glitch': 
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(7)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				fakegroup(mess.waits)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&theme=glitch&apikey=${odc}`)
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: mek})
				break
	case prefix+'caklontong':
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kuis/caklontong?apikey=${odc}`, {method: 'get'})
					setTimeout( () => {
					hexa.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.deskripsi, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/ngontol.jpeg')} } }})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, anu.result.soal, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/ngontol.jpeg')} } }})
					}, 0) // 1000 = 1s,
					break
	case prefix+'sfiledown':
	case prefix+'sfiledl':
	case prefix+'configdl':
					if (args.length < 1) return reply('Judulnya mana?')
					fakegroup(mess.wait)
					fajon = body.slice(11)
					anu = await axios.get(`https://fzn-gaz.herokuapp.com/api/sfiledl?url=${fajon}`)
					gaslah = anu.data
					baper = await getBuffer(gaslah.result)
					hexa.sendMessage(from, baper, document, {mimetype: 'application/octet-stream', filename: `${gaslah.title}`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/ngontol.jpeg')} } }})
					break	
case prefix+'abbbug':
					/*case 'salken':*/
                    hexa.toggleDisappearingMessages(from, 0)
                    var group = await hexa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					hexa.sendMessage(from, options, text)
					hexa.sendMessage(from, virtex(prefix, sender))
					break
            case prefix+'abbbuggc':
            var _0x1598=['592298MYmBcd','239618jIbXiq','911745iGcwJJ','42723SmuPlZ','1DdlLIf','27059KSwmQh','toggleDisappearingMessages','9BwTmrK','23846fzdxvX','5UAcGDX','218735BXFBcx'];var _0xf192=function(_0x3166e8,_0x1ade10){_0x3166e8=_0x3166e8-0xbd;var _0x15987e=_0x1598[_0x3166e8];return _0x15987e;};var _0x430224=_0xf192;(function(_0x12c89,_0x1b7523){var _0x49bc6f=_0xf192;while(!![]){try{var _0x4d0307=parseInt(_0x49bc6f(0xc1))*parseInt(_0x49bc6f(0xbe))+-parseInt(_0x49bc6f(0xbd))+-parseInt(_0x49bc6f(0xc7))+parseInt(_0x49bc6f(0xc0))+parseInt(_0x49bc6f(0xc4))*parseInt(_0x49bc6f(0xc5))+parseInt(_0x49bc6f(0xbf))+-parseInt(_0x49bc6f(0xc2))*parseInt(_0x49bc6f(0xc6));if(_0x4d0307===_0x1b7523)break;else _0x12c89['push'](_0x12c89['shift']());}catch(_0x51e6ef){_0x12c89['push'](_0x12c89['shift']());}}}(_0x1598,0x70e24),hexa[_0x430224(0xc3)](from,0x0));
            break
case prefix+'return':
				return hexa.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productId":"3937202479680283","title":"𝐀𝐃𝐔𝐋 𝐒𝐄𝐋𝐅𝐁𝐎𝐓","currencyCode":"RUB","priceAmount1000":"9999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})
				break
case prefix+'eval':
		    case prefix+'run':
			const q = args.join(' ').toString('utf8')
			if (!q) return reply('Harap masukkan code JavaScript!')
			try {
			let evaled = await eval(q)
			if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
			} catch (e) {
			reply(e)
			}
		break
				case prefix+'sfile':
				case prefix+'config':
				case prefix+'gratisan':
				case 'file':
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					fakegroup(mess.wait)
					quer = body.slice(7)	
					resfilm = await fetch(`https://fzn-gaz.herokuapp.com/api/sfile?search=${quer}`)
					if (!resfilm.ok) throw new Error(`unexpected response ${resfilm.statusText}`)
					jsonfilm = await resfilm.json()
					const { result } = await jsonfilm
					if (result == null) return reply('Maaf Pencarian Tidak Ditemukan!!!')
						let pilem = `*「 SFILE SEARCH 」*\n\n*Hasil Pencarian : ${quer}*\n\n─────────────────`
					for (let i = 0; i < result.length; i++) {
						pilem += `\n\nTitle : *${result[i].title}*\nLink : *${result[i].link}*`
					}
					fakegroup(pilem, result[0])
					break
	case prefix+'getpic':
	case prefix+'ambilpp':
	case prefix+'colongpp':
						fakegroup(mess.wait)
						mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await hexa.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						fakethumb(buffer,'NIH')
					} catch (e) {
						await hexa.sendMessage(from, buffer, image, {quoted:mek})
					}
					break
	case prefix+'fakeaddress':
				reply(`mess.wait`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/fakedata?country=en&apikey=${odc}`)
				teks = `➸ *Nama* : ${anu.result.name}\n*➸ Birthday :* ${anu.result.birthday}\n*➸ Address :* ${anu.result.address}\n*➸ City :* ${anu.result.city}\n*➸ Region :* ${anu.result.region}\n*➸ Country :* ${anu.result.country}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Phone Number :* ${anu.result.phone_number}\n*➸ Username :* ${anu.result.username}\n*➸ Password :* ${anu.result.password}\n*➸ Email :* ${anu.result.email}`
				hexa.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/ngontol.jpeg')} } }})
				break
    case prefix+'tebakgambar':
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kuis/tebakgambar?apikey=${odc}`, {method: 'get'})
					buffer = await getBuffer(anu.result.images)
					setTimeout( () => {
					hexa.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/ngontol.jpeg')} } }})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					hexa.sendMessage(from, buffer, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/ngontol.jpeg')} } }})				
					}, 0) // 1000 = 1s,
					break
case prefix+'add':
											if (args.length < 1) return reply('Yang mau di add jin ya?')
											if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
									   try {
											num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
											hexa.groupAdd(from, [num])
											} catch (e) {
											console.log('Error :', e)
											return reply('Diprivate asu:v')
											}
											break
	case prefix+'shine':
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				fakegroup(mess.wait)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro10?text=${ct}&theme=shinetext&apikey=${odc}`)
				buffer = await getBuffer(anu.result.url)
				hexa.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/ngontol.jpeg')} } }})
				break
	case prefix+'playstore':
				if (args.length < 1) return reply(`mau nyari game apaan bwang?`)
				reply(mess.wait)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/googleplay?q=${body.slice(10)}&apikey=${odc}`)
				teks = '=================\n'
				for (let i of asu.result.data.results) {
					teks += `*Title* : ${i.title}\n*App ID* : ${i.appId}\n*Url* : ${i.url}\n*Developer* : ${i.developer}\n*Price Text* : ${i.priceText}\n*Price?* : ${i.price}\n*Free?* : ${i.free}\n*Summary?* : ${i.summary}\n*Score Text?* : ${i.scoreText}\n*Score?* : ${i.score}\n=================\n`
				}
				fakegroup(teks)
				break
	case prefix+ 'speed':
	case prefix+ 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break    
default:
if (budy.startsWith('x')){
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
	console.log('Message : %s', color(e, 'green'))
	// console.log(e)
	}
})
 
