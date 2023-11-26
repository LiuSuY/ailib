const puppeteer = require('puppeteer');
const http = require('http')
const https = require('https')
const fs = require('fs');

const url = 'https://www.liblib.ai/';


(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(url, {
        waitUntil: 'domcontentloaded'
    });

    await page.setViewport({
        width: 1920,
        height: 1080
    })
    await page.waitForSelector('div.mantine-AppShell-root');

    await page.waitForSelector('main.mantine-AppShell-main');


    let imgs = [];
    let num = 0;

    function wait(ms) {
        return new Promise((resolve) => setTimeout(() => resolve(), ms));
    }
    async function loadMore(page) {
        return new Promise(async (resolve, reject) => {
            const bodyHandle = await page.$("body");
            const { height } = await bodyHandle.boundingBox();
            await bodyHandle.dispose();
            const viewportHeight = page.viewport().height;
            let viewportIncr = 0;
            while (viewportIncr + viewportHeight < height) {
                await page.evaluate((_viewportHeight) => {
                    window.scrollBy(0, _viewportHeight);
                }, viewportHeight);
                await wait(800);
                viewportIncr = viewportIncr + viewportHeight;
            }

            await page.waitForSelector('main.mantine-AppShell-main #liblib-home-models-feed-wrapper div[role="gridcell"] img.relative');
            temp = await page.$$eval('main.mantine-AppShell-main #liblib-home-models-feed-wrapper div[role="gridcell"] img.relative', els => Array.from(els).map(el => el.src));
            imgs = [...imgs, ...temp]
            resolve(temp.length);
        })
    }

    while (num <= 150) {
        num += await loadMore(page);
    }



    const fileNames = await imgs.map(async (item) => {
        const itemShadow = item;
        let fileName = item.substring(item.indexOf('image/') + 6, item.indexOf('?image_process'));
        fileName = fileName.replace('png', 'webp').replace('jpg', 'webp').replace('jpeg', 'webp');
        if (fileName == '?image_process=format,webp&x-oss-process=image/') {
            return
        }
        await downloadImage(itemShadow, fileName);
        return fileName;
    })

    const fileNamesShadow = [];
    await fileNames.map(item => {
        item.then(res => {
            if (res) {
                fileNamesShadow.push(`http://127.0.0.1:3000/images/${res}`)
            }
        })
    })

    // 清空文件夹文件
    await clearImages();

    // 保存下载文件路径
    await saveImagesName(fileNamesShadow);


    await browser.close();
})();

const downloadImage = (imagUrl, fileName) => {
    if (fileName.indexOf('.webp') != -1 || fileName.indexOf('.gif') != -1) {
        const mode = /^https:\/\//.test(imagUrl) ? https : http;
        mode.get(imagUrl, (res) => {
            res.pipe(fs.createWriteStream('images/' + fileName))
                .on('finish', (err) => {
                    if (err) {
                        console.error(err)
                    }
                    console.log('pipe finish ...', fileName);
                })
        })
    }

}

const saveImagesName = (fileName) => {
    fs.writeFile('images/dowloadFileNames.txt', fileName.join('\n'), (err) => {
        if (err) {
            console.error(err)
        }
        console.log('txt finish ...');
    })
}

const clearImages = async () => {

    fs.access('images/dowloadFileNames.txt', async (err) => {
        if (err) {
            console.log('文件不存在');
            try {
                await fs.mkdirSync('images');
            } catch (error) {
                console.error(err);
            }
        } else {
            console.log('文件存在');
            try {
                await fs.rmdirSync('images', { recursive: true });
                console.log('文件夹删除成功')
            } catch (err) {
                console.log('删除失败', err)
            }
        }
    })
}



