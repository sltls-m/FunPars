# FunPars

## Что позволяет делать
Парсер позволяет собирать информацию о товарах, услугах и ценах, предлагаемых на платформе FunPay.com. Парсер осуществляет автоматический сбор данных с сайта и сохраняет полученную информацию в Гугл Таблицах и отсылает сообщения о товарах в Telegram бота.

## Как установить и пользоваться.

> Для работы скрипта нужен [NodeJS](https://nodejs.org/en). Скачиваем его и устанавливаем.
1. Скачиваем [репозиторий](https://github.com/sltls-m/FunPars/archive/refs/heads/main.zip) в любую удобную для вас папку.
2. Открываем терминал PowerShell и вводим туда команду `cd путь\до\вашей\папки`.
3. Следующая команда `npm install`.
4. Открываем [Гугл Таблицы](https://docs.google.com/spreadsheets/u/0/), создаем новую таблицу.
5. Переходим во вкладку `Расширения > Apps Scripts`. Как открылось окно редактора скриптов вставляем туда код из файла `appScripts.js`.
6. Следуем советам из комментариев в коде этого скрипта. Вставляем ссылку на свою созданную таблицу и название листа.
7. Открываем [Telegram](https://web.telegram.org/), входим в свой аккаунт. В поиске ищем [@BotFather](https://t.me/BotFather).
8. Создаем нового бота командой `/newbot`. Задаем ему любое имя. После создания копируем токен выданный ботом. Вставляем его в функцию `sendBotMessage` в переменную `token`.
9. Открываем бота [@getmyid_bot](https://t.me/getmyid_bot) и копируем id пользователя. Вставляем его в функцию `sendBotMessage` в переменную `channel`.
10. Справа сверху в AppsScripts нажимаем кнопку **Начать развертывание > Новое развертывание**. Описание оставляем пустым, доступ выставляем на **Все**. Копируем выданную ссылку.
11. Открываем файл `main.js` и находим переменную `URL_APP`. В значение этой переменной вставляем скопированную ссылку.
12. Находим строку `await page.goto('###############');` и вместо # вставляем ссылку на нужный товар. Например: [https://funpay.com/chips/2](https://funpay.com/chips/2/).
13. При необходимости спускаемся ниже и меняем валюту и стоимость за единицу товара.
14. Открываем терминал PowerShell и вводим команду `npm run start`.
15. Наслаждаемся работой скрипта.

---

## What it allows you to do
The parser allows you to gather information about products, services, and prices offered on the FunPay.com platform. The parser automatically collects data from the website and saves the obtained information in Google Sheets, as well as sends messages about products to a Telegram bot.

## How to install and use
> To work with the script, you need [NodeJS](https://nodejs.org/en). Download and install it.

1. Download the [repository](https://github.com/sltls-m/FunPars/archive/refs/heads/main.zip) to any convenient folder.
2. Open PowerShell terminal and enter the command `cd path\to\your\folder`.
3. Run the command `npm install`.
4. Open [Google Sheets](https://docs.google.com/spreadsheets/u/0/), create a new spreadsheet.
5. Go to the `Extensions > Apps Scripts`. When the script editor window opens, paste the code from the file `appScripts.js` into it.
6. Follow the recommendations in the comments of this script. Insert the link to your created spreadsheet and the sheet name.
7. Open [Telegram](https://web.telegram.org/), log in to your account. Search for [@BotFather](https://t.me/BotFather).
8. Create a new bot with the command `/newbot`. Give it any name. After creation, copy the token provided by the bot. Paste it into the `sendBotMessage` function in the `token` variable.
9. Open the [@getmyid_bot](https://t.me/getmyid_bot) bot and copy the user ID. Paste it into the `sendBotMessage` function in the `channel` variable.
10. In AppsScripts, click the button Deploy > New Deployment at the top right. Leave the description empty and set access to Anyone. Copy the provided URL.
11. Open the `main.js` file and find the `URL_APP` variable. Paste the copied URL as the value of this variable.
12. Find the line `await page.goto('###############');` and replace the # with the link to the desired product. For example: [https://funpay.com/chips/2](https://funpay.com/chips/2/).
13. If necessary, scroll down and change the currency and unit cost of the product.
14. Open PowerShell terminal and enter the command `npm run start`.
15. Enjoy the script's functionality.
