const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94775053620";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94775053620,94775053620
;

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_08_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0LFxuICAgICAgICA3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc0LFxuICAgICAgICA1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICA3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDcwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhIck5taVA1LzQ2Tk5WZjFoN1Z5K0RpNmtobjVMQ2FrWndYOVE5T01BMG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFfZXN4WnduVEdpYUpfWEVMeVQ2UVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjVhNjAyNTEtM2I2My00ZDBmLTg1ZDYtYTRlMDViYjI4MmUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDM4LFxuICAgICAgMTIxLFxuICAgICAgMTEsXG4gICAgICAyNDQsXG4gICAgICAyMzYsXG4gICAgICA3LFxuICAgICAgMjAsXG4gICAgICA5MSxcbiAgICAgIDIzOSxcbiAgICAgIDkxLFxuICAgICAgMjI0LFxuICAgICAgMjA1LFxuICAgICAgODksXG4gICAgICAyMDIsXG4gICAgICA1MixcbiAgICAgIDEwNixcbiAgICAgIDkzLFxuICAgICAgNyxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgNTIsXG4gICAgICAyNDAsXG4gICAgICAxMyxcbiAgICAgIDEyMyxcbiAgICAgIDEzMCxcbiAgICAgIDgyLFxuICAgICAgMTU5LFxuICAgICAgMTc1LFxuICAgICAgMTA4LFxuICAgICAgMTk1LFxuICAgICAgMTk2LFxuICAgICAgMTAzLFxuICAgICAgMjQ1LFxuICAgICAgNjUsXG4gICAgICAyMTMsXG4gICAgICA3NixcbiAgICAgIDQ4LFxuICAgICAgOSxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzNTME5BREVKYTVtYmtHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuRjVqQjN4VUlYRTd1L1hGeW9DSkVsUHBNT1lZWitTWGlmZmtsaXZ0YVRVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFvd1Z4SDNnMy80TERZVGFUcDkxU0txQ3VFVStmYzhwNE5JTWNwKzZCaDYzcTlSUFFzYThWdjhWci9CWExqSlhHV25KbXFKZGN5QXQ0Wk5pWGMzZUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFwNVU1LzBxUDBTY2JVOCtJYmhRREcvQXQ3NTVhbTJrVkozUzBpekpPZVhtRFFrd3BQMTJVVGthSFBzQnIrR2QrK0NTZi9LWlRNbk5WM1pQamFEbWp3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzUwNTM2MjA6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY0NTEwODk1MzU4MTgwOjU1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIll5XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NTA1MzYyMDo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTY3MzIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmRHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKZEYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3MUJTRzVKN3BOSllxOVdoYnBlQVFVN1MwbVpEV084WjcrekExOFRwTVJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3NDM5OTg1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNTY2MzE3Mzg5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmRHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiczhRaExUc29qaVJPU2k4ZlJJN0E2UE5WQzBVRG9JR2FKVXZsY1A5VjRCYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzQzOTk4NTMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDU2NzE1NjY0OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
