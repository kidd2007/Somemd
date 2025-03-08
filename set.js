// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pair.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*"; // Input Yours custom...(Maintain font for Flow)
global.myDb = "https://giftedmd.giftedtech.web.id"; // DO NOT Change this...
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://cdn.giftedtech.web.id";
global.giftedRepo = "https://github.com/mouricedevske/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mouricedevske/gifted-md";
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"yDFklsypfsxwszSqksVU1l27ZID26QwZ3QZtq0KNSUU="},"public":{"type":"Buffer","data":"+T2KRJOwDogaDTs0XXPUocZF0LWuF/hW6VyK5OrmFxA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"qLErnkUfFJqGDwh9SSafjcqEKRCSNqClHiYmImnBUGM="},"public":{"type":"Buffer","data":"pq8Oe3URaTCAv2gNB2zeZd4ZMcMNklAp4aSp8PDJZ0M="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GE3gsZ86pKHXPXdhujw6+eoZj3eJBKmp3rUIktEo0n8="},"public":{"type":"Buffer","data":"zd0avPXRhuHR9oiygbfYIkIxF17+UurBu+AXWDzO4jM="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"WEUDTANQSIoRhzhv7DbMAjzDBQzvrB/8fGEQp7hFbF0="},"public":{"type":"Buffer","data":"5FRDbSvUMCLij4wvpubRq94UwaZHPycWKQk3uJJTTyI="}},"signature":{"type":"Buffer","data":"5mzYK/8s08lw8ShOFVqQzzUJhftxUoo4eOoSCp7K/LDsh8wZIGKcs3ZL4pIwQE4ZXZp/ORrx0YP2/3UibLcJgQ=="},"keyId":1},"registrationId":118,"advSecretKey":"y03VwHgmFP7XA9LZgPzzFsf4FRQBHUSyrvodmG+u774=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"qxXHyauPT76WFKqaaMjlKg","phoneId":"a170ecf4-a1b7-4527-8a36-eff8f4c017bd","identityId":{"type":"Buffer","data":"Km4POUQXWxfyFmIG9Qi6+hq1DMg="},"registered":true,"backupToken":{"type":"Buffer","data":"/Xlrxtux23lIpwnMFz/d0mIftyI="},"registration":{},"pairingCode":"MT654TBQ","me":{"id":"22960825432:8@s.whatsapp.net","name":"Dhream"},"account":{"details":"CIKd+KwEEISesr4GGAEgACgA","accountSignatureKey":"AUsMA9veZKnchueQl8JzgclUC6olF3aQU79bs6dyvho=","accountSignature":"dDJptNIANAK0GhbrKWFKgUqifjB+1CG2GIpanpgA7xjISS8SVouzyY3IXVxuhDd+fgLPCU5oMvOgU6OsLRilBQ==","deviceSignature":"yYUXdDtrXFqnyDv8MVKGjTEq2R6Dp3XEPc9qcZ/XjYexdyV6gL/8Z1L1RNmSLUoR4rIMahRfl9pKLmhiMV9Egg=="},"signalIdentities":[{"identifier":{"name":"22960825432:8@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQFLDAPb3mSp3IbnkJfCc4HJVAuqJRd2kFO/W7Oncr4a"}}],"platform":"smba","lastAccountSyncTimestamp":1741459217,"myAppStateKeyId":"AAAAAFYG"}", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || false, // Make true to use Antidelete for Chats, Groups, Statuses & Channels
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJI: process.env.AUTO_LIKE_EMOJI || "👣", //Input Yours custom...
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by 👣🤧😅😐", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "2349066052477", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "Mortal", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "Kiddo", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "lighted", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://cdn.giftedtech.web.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "true",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Gifted creates things that creates other things",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
