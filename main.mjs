// import TelegramBot = require("node-telegram-bot-api");
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
// import { query } from "./query.mjs";
import * as poolData from "./pool.json" assert { type: "json" };

const data = poolData;

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const welcomeMSG = `*Coin Tracker Bot*


**You can use the following commands:**
/token <address> - list info of token`;

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    parse_mode: "Markdown",
  };

  bot.sendMessage(chatId, welcomeMSG, opts);
});

bot.onText(/\/test/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    parse_mode: "Markdown",
  };
  const resp = 
    `*[TODO]* Token\n
    Address: [TODO]
    Symbol: [TODO]
    Volume: [TODO]
    TVL: [TODO]
    Liquidity: [TODO]
    Symbol: [TODO]
    \n
    [Dexview](https://www.google.com/) || [Dexscreener](https://www.google.com/)
    [Trade on Uniswap](https://www.google.com/) || [Contract](https://www.google.com/) || [Deployer](https://www.google.com/)`;
  bot.sendMessage(chatId, resp, opts);
});
// **TOKEN**
// bot.onText(/\/token (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;

//   if (match![1] in data["token"]) {
//     const tokenData = data["token"][match![1]];

//     const resp = `*${match![1]}* in **Uniswap**\n\nAddress: [${
//       tokenData["address"]
//     }] https://info.uniswap.org/#/tokens/${tokenData["address"]})\nDecimal: ${
//       tokenData["decimals"]
//     }\nSymbol: ${tokenData["symbol"]}`;

//     const opts = {
//       parse_mode: "Markdown",
//     };

//     bot.sendMessage(chatId, resp, opts as any);
//   } else {
//     const resp = "Not in token list!\n/tokenList to see more.";
//     bot.sendMessage(chatId, resp);
//   }
// });

bot.onText(/\/token (.+)/, (msg, match) => {
    const chatId = msg.chat.id;

    const resp = 
    `*[TODO]* Token\n
    Address: [TODO]
    Symbol: [TODO]
    Volume: [TODO]
    TVL: [TODO]
    Liquidity: [TODO]
    \n
    [Dexview](https://www.google.com/) || [Dexscreener](https://www.google.com/)
    [Trade on Uniswap](https://www.google.com/) || [Contract](https://www.google.com/) || [Deployer](https://www.google.com/)`;

    const opts = {
      parse_mode: "Markdown",
    };

    bot.sendMessage(chatId, resp, opts);
});


// **REQUEST**
// bot.onText(/\/request (.+)/, async (msg, match) => {
//   const chatId = msg.chat.id;

//   const fs = require("fs");
//   try {
//     fs.writeFileSync("./requestPool.txt", match![1]);
//     bot.sendMessage(chatId, "Report to Devs!");
//   } catch (err) {
//     console.error(err);
//     bot.sendMessage(chatId, "Failed. Try again later");
//   }
// });
