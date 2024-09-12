const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/uwemdev/all-in-one-whatsapp-bot";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348110572387";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_53_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTczLFxuICAgICAgICA5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE2LFxuICAgICAgICA5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSnZhRHVJZHlLRUc1eGJ3NUcxVmUyUjJiTXc0RS9LTldnRHRpY0RpMzMzcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZDRKUjN0eWNRMlc1MEpTaFpjekp1d1wiLFxuICBcInBob25lSWRcIjogXCI3MThlNjZjNS01YzdkLTQwNmQtYWE2Ni0yZWQxNTFkMmIyZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgMTYsXG4gICAgICA1MCxcbiAgICAgIDY0LFxuICAgICAgMjQ2LFxuICAgICAgMjEwLFxuICAgICAgMTQ3LFxuICAgICAgMTk0LFxuICAgICAgOTYsXG4gICAgICA5NyxcbiAgICAgIDE4NyxcbiAgICAgIDE5NCxcbiAgICAgIDE5OCxcbiAgICAgIDIzNSxcbiAgICAgIDI1MyxcbiAgICAgIDM2LFxuICAgICAgOTIsXG4gICAgICA5MyxcbiAgICAgIDE1OSxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxMzksXG4gICAgICAyMDcsXG4gICAgICAyMTgsXG4gICAgICAxOTksXG4gICAgICAyMTIsXG4gICAgICAyNTQsXG4gICAgICAzOCxcbiAgICAgIDIzNSxcbiAgICAgIDUwLFxuICAgICAgMTgwLFxuICAgICAgNzQsXG4gICAgICAyMzQsXG4gICAgICAxMDIsXG4gICAgICAxMzMsXG4gICAgICA5OCxcbiAgICAgIDEyMyxcbiAgICAgIDM0LFxuICAgICAgMjA0LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY2M0NGUUNOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcxNDE5MjQ1OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW5qb3JpbiBEYW1pbG9sYSBJeWFudW9sdXdhXCIsXG4gICAgXCJsaWRcIjogXCIxOTcwOTIxNzM2ODA2NTM6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0dMNThrR0VNdU5qYmNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJObEVYY3pyaHU1Rlo1SXozRlhDM2RVMzdTV0JQeDF2L1RjajgwM1pQTUVFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkI5Y0VRNFh5U2FJYjBWS2FsalgvTVBMVFROZUVpWnB6dTUvdUpFd25VY3cwR0VNbzRjVFNQUllSVWJiKzFjSnlkbUQwclhiY2FNazROUVU1aTBkd0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkl6MFQ5NXJGczNDbTJoS0I2c0x1SnpIcVFDdm96MDV2MEZkUlE5bENMSFJ5N1Z4ZWFJcWxPaHJFb2pXUnV6L2JsdFdza3FkbnU3c1ZvMEQzQ1d2bWp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzE0MTkyNDU6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYxNzA4MzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUJZQUFMRmRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQllBQUxGZC5qc29uIjoge30KfQ=="  // 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


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
