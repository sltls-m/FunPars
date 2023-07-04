// Вставьте ссылку на свою таблицу в Google Sheets
// Вставьте название листа на который планируете добавлять данные
// Please insert the link to your Google Sheets spreadsheet.
// Please insert the name of the sheet where you plan to add the data.
const SHEETS_URL = '';
const SHEETS_NAME = '';


function doPost(e) {
    const sheets = SpreadsheetApp.openByUrl(SHEETS_URL);
    const sheet = sheets.getSheetByName(SHEETS_NAME);

    let {link, server, nick, rating, reg, amount, price} = JSON.parse(e.postData.contents);
    Logger.log(e)

    let values = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
    let counter = 0;
    for (let i = 2; i < values.length + 2; i++) {
        // Logger.log(sheet.getRange(i, 1).getValue())
        // Logger.log(link)
        if (sheet.getRange(i, 1).getValue() !== link) {
            counter++;
        }
    }

    if (counter === values.length) {
        sheet.appendRow([link, server, nick, rating, reg, amount, price, new Date().toLocaleString(), `=G${sheet.getLastRow() + 1} * 10`, `=G${sheet.getLastRow() + 1} * F${sheet.getLastRow() + 1}`]);
        sendBotMessage(JSON.parse(e.postData.contents));
    }


    return ContentService
        .createTextOutput(JSON.stringify({"type": "success"}))
        .setMimeType(ContentService.MimeType.JSON);
}

function sendBotMessage(e) {
    const url = "https://api.telegram.org/bot"
    // Вставьте токен бота Telegram
    // Вставьте id своего чата с созданным ботом Telegram
    // Please insert your Telegram bot token.
    // Please insert the ID of your chat with the created Telegram bot.
    const token = ""
    const chanel = ""


    let data = {
        "chat_id": chanel,
        "text": `${e.link}\n\n*Сервер: *${e.server}\n*Ник: *${e.nick}\n*Отзывы: *${e.rating}\n*Зарегистрирован: *${e.reg}\n\n*Количество: *${e.amount} кк\n*Цена: *${e.price} ₽`,
        "parse_mode": 'markdown'
    }

    UrlFetchApp.fetch(url + token + "/sendMessage", {
        "method": "post", 'payload': data
    })
}
