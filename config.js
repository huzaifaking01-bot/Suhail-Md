const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923193401810";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_27_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM0LFxuICAgICAgICAzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk0LFxuICAgICAgICA3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMTI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDM3LFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA1LFxuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAxODksXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIllWMVRHa1c3dGpSZkJhblJ6S2Z0cWZHNXlTakZ1aWh0cUtNd2hnUjhGWmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlF0emRzN1FOVDgyNWJVbWJiVDlwR2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzQ0MzkwMzUtMmQ0Mi00MGM2LTgwZWMtNGY0MzcxYjI4ZGM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDIwNCxcbiAgICAgIDU1LFxuICAgICAgNzQsXG4gICAgICAyNDUsXG4gICAgICAyNDUsXG4gICAgICA5NCxcbiAgICAgIDE2MixcbiAgICAgIDE2MSxcbiAgICAgIDEzMSxcbiAgICAgIDQyLFxuICAgICAgNjMsXG4gICAgICAxMjAsXG4gICAgICAyMzQsXG4gICAgICAxMzksXG4gICAgICAxNzUsXG4gICAgICA5NCxcbiAgICAgIDEyNSxcbiAgICAgIDE5MCxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAyMDMsXG4gICAgICA5OCxcbiAgICAgIDE3NCxcbiAgICAgIDMwLFxuICAgICAgMTY3LFxuICAgICAgMTM0LFxuICAgICAgODAsXG4gICAgICAyNTUsXG4gICAgICAxMzYsXG4gICAgICA5MixcbiAgICAgIDE2MCxcbiAgICAgIDE1MCxcbiAgICAgIDMyLFxuICAgICAgNTUsXG4gICAgICAxNjEsXG4gICAgICAxMTEsXG4gICAgICA1NSxcbiAgICAgIDE4MyxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhOTUc5UEY2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTM0MDE4MTA6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwk4SC8JOGsOWNhPCdmap68J2Zls2izaDJqtKTyozqpr9cXG7in7XQusmqybTJouKTteKftvCThqpcIixcbiAgICBcImxpZFwiOiBcIjE0MzA0ODMxNTAyNzU4Nzo4MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcTR0L1VERUk2QzFMTUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1QUTZpNkJOM1NvYytNT1graTBhYW5vZmFKMXdYdGd3OHg2OHNqczZsMTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVzlKWWE3OHQ1dzZ2TUFuS1FGZnRzNEQ1ZDNUVnVsam81bjk2WDFNV3VEeTNWeFVmVVl5VWFlc0ZKbEhEcEtaZzhJZkVPRVJsOXJwUFpScXROYk1mQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSkpXalU0MXVzM2tWN1kxSXlGTXpMd3YzOEwrdVNXcU5JbTFOem1iWVJEYWJ0SEFBUEEyUUZRc25uOHlZUUVUQzFKYXlUZFE3aUg4T0Y0ejdhVTRVREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTkzNDAxODEwOjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5NDQwMTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGSlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZKUC5qc29uIjogIntcImtleURhdGFcIjpcIlBXMGdDdVBRWDF3emtrQzdBTE9OSWlueERWWjhuYk1rVVN2Y2UrK2RFSWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1MTU4MTU0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4OTA0MTEwMzE0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
