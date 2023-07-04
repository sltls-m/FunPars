const puppeteer = require('puppeteer');
(async x => {
    // INSERT YOUR VALUE FROM APPS SCRIPTS HERE
    // ВСТАВЬТЕ ТУТ СВОЕ ЗНАЧЕНИЕ ИЗ APPS SCRIPTS
    const URL_APP = '###############'

    // Launch the browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 1280, height: 2048});

    // INSERT THE LINK TO THE PRODUCT YOU ARE INTERESTED IN.
    // ВСТАВЬТЕ ССЫЛКУ НА ИНТЕРЕСУЮЩИЙ ВАС ТОВАР
    await page.goto('###############');
    // Ждем загрузки списка товаров
    await page.waitForSelector('.tc-header');

    while (1<2) {
        await page.reload();
        await page.waitForTimeout(3000);

        const items = await page.$$eval('a.tc-item',
            options => {
                return options.map(option => option.innerText);
            });

        const links = await page.$$eval('a.tc-item',
            options => {
                return options.map(option => option.href);
            });

        for (let i = 0; i < items.length; i++) {
            let item;
            items[i] = items[i].replaceAll('\t', '');
            items[i] = items[i].split('\n');
            item = items[i];
            item.splice(1, 1)

            // Replace the currency symbol with the currency of your country.
            // Replace the unit symbol with the unit of the product.
            // Замените знак валюты на валюту своей страны
            // Замените обозначение единиц товара
            item[5] = Number(item[5].replaceAll(' ₽', ''));
            item[4] = Number(item[4].replaceAll(' кк', ''));


            // ВЫСТАВЬТЕ ЦЕНУ, КОТОРУЮ ПОСЧИТАЕТЕ НУЖНЫМ
            // PLEASE STATE THE PRICE THAT YOU CONSIDER APPROPRIATE.
            if (item[5] <= 50.00) {

                let fd = {
                    link: links[i],
                    server: item[0],
                    nick: item[1],
                    rating: item[2],
                    reg: item[3],
                    amount: item[4],
                    price: item[5]
                }

                await fetch(URL_APP, {
                    method: 'POST',
                    cors: "no-cors",
                    body: JSON.stringify(fd)
                })

            }
        }
    }
})();
