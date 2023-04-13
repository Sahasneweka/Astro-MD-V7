const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'IM JOKER POWERD BY MR.SAHAS 🛑🪀Welcome🪀🛑

_*හායි๛⃞⃯😍ʰᵃˡˡᵒ⃟🫧̐👋*_

_*JOKER POWERD BY 🧸⃝⃔MR.SAHAS🪀 ⃞⃞⃞⃞⃞⃞⃡⃡⃡⃡⃡⃡⃡ ̶*_

_*👨‍💻ආයුබෝවන් කිව්වා 🙏👨‍💻*_

_*📜රූල්ස් ටික මේමයි සගෝලා📌*_

_♻️මෙය ස්වංක්‍රීය බොට් කෙනෙකි..._

_♻️මෙම බොට් *h 24* ක්‍රියාත්මක වේ.._

_♻️බොට්ගේ මෙනු එක ගැනීම සදහා *.menu* බාවිතා කරන්න.._

_♻️කමාන්ඩ් යෙදීමේදී තිත අත්‍යාවශ්‍ය නොවේ.!_

*{උදා:- .song උබට ඕන එකක් ගහගනිම්}*

*ALIVE MSJ එක බැලුවනම් ඔන දේ කරගත්තනම් පලයන් අඩේ යන්න 👀

' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/QYmjymD/IMG-20221019-WA0064.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? 'JOKER POWERD BY MR.SAHAS' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*JOKER POWERD ʙʏ MR.SAHAS*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*Inbox not allowed' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? 'MR.SAHAS' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID
};
