/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xmUFAvTzN0ZTBGMXhwZzFOL2ZlV2NDR0RQY0Q0dnRMdjIrQWlFOGlGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3RyblVBSFIwcUNsYWw0bUprdUE5QXpOUUxLV0FvMU5xcjlQUVY4TFNUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSE5jVjJSREdSZVJZS0ZTejFnSlNiZEl4TlpudG9pbm8xUmVlc0ZJU1c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsc0pHU0dpNHk2ZjNpS251WVFSeHFSTkJPcllJSGVaL0JtblQ5di90ckZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLckF6bGhvZjF3NVg4bk11R2lmMEFnQWx1V004d0dUOWduSzJiU0I1ME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklSUVhJaXBUbUJBTlZ1QnNJVHpuV3ozbE5ZUzRaaUhYeGtDRnVtSldHQms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0w5TGVlUzhSSHZBcEpUZ2lGY3UvNkdPT2EzS1RXNGJ3dlB2ODVNaThHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEtzMzRnbFFBVjdnWms3WDYveUhUcmF6Zkt1ZTloV21SRk1OVE95RjlIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc4QytyRzk3Z2xJSnZ0TzhDQ1B4YTNtREg4Z0w5YmY0RUZCVFZURmo1VFFWRVIzV1AwWmFZMlpJY1pubmdqUm0vKzYrQTRTWCtOS0N5NVRSdmUrOUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJMMHNrQ1hLWEFVYjEreEZKcE1BRzA1dXc5d3AydGlHSjZHZE5uTDgvSXkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MDk4MDI3ODgwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NjY3REYxRTM5QjIxNzlGOEQ0MDhFMDIwQTYyRDUwQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1MDk5MDMzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjA5ODAyNzg4MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTBFOTY3MzYyNkJDQjREMzU5MzVEMEI1N0Y0NkJFODkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTA5OTAzNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjYwOTgwMjc4ODA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA2MzFFNTE5NjRBODI5OUJEMDM0OUYxQjRGOEYwNkJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUwOTkwNDR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2MDk4MDI3ODgwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNjRGNEQ1OTM2QzcyNDQ1MTA0QzQyNDE2RjE5MEVDMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1MDk5MDQ0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjA5ODAyNzg4MDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUQ2NjUxNzQ3NjhFMkUwOUU0MTczNzhCQ0Q0MDZFNkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTA5OTA0NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWVN4MkkydTJROE9rWDYyWkQ1MGF6USIsInBob25lSWQiOiJiZmQ2MDQ1Yy1lZGRlLTRiYWItOWJlNi01NTRhYmVhNmY1MzkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN20wdnNKUER1ZFg4NFlqOUJVek0zMWdtcW1VPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhSQWJRYXcwNTQvRjhCMmFueENHOERCWEJ4ND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHNVdTM0o5OSIsIm1lIjp7ImlkIjoiMjYwOTgwMjc4ODA2OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+mhSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWJrdUpBR0VJdXlrTUFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicXRrM3hMWmxHR0U0eEdhRDdyTVlZTW1MTVVMR2RJamxuVFJxWEphSjgxVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL3I1ajg1cGN1MVVPOTUzM0hIWEdtNGhaWGV6R21Za2Jnc2M0UEQ3YVZxNEkzQSthbDB2My9xWDRaOGlhV2JTV3R6NDdlcnFtQ0Jpdk0veGxWcVA3RHc9PSIsImRldmljZVNpZ25hdHVyZSI6Im14aHdzYnJxYXlpalJOUnJpcmNCWXM4Undud01TRnBRTWJISyttWWJtSlNKOHcwcENRZEp3enFqMGk1dHZRYVVqSENpUU12MHlZWHVwSFllemdVRUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYwOTgwMjc4ODA2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXJaTjhTMlpSaGhPTVJtZys2ekdHREppekZDeG5TSTVaMDBhbHlXaWZOViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTA5OTAzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQOHUifQ==';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'false';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'Cyrus';
const packname = process.env.STICKER_PACKNAME || 'Mc';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '260771798128';
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'gay';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
