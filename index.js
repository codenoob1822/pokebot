const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = "https://pokedex7thgen.herokuapp.com"
    token = process.env.TOKEN || '744027562:AAGEldlvmRXsb39NarK2SAevW-vc-RlC_MI',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if(msg.text == "hi"|| msg.text == "Hi" || msg.text == "HI") {
        bot.sendmessage(chatId, 'namovakam');
    }
    else{
   
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'bhag bsdk');
    }});
