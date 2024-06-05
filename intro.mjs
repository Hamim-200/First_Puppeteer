import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1000 },
    slowMo: 250,
    userDataDir: "temporary",
});

const page = await browser.newPage();

await page.goto("https://www.w3schools.com/c/", {
    waitUntil: "networkidle2",
    timeout: 30000,
});
const pageTitle = await page.title();
const pageHeader = await page.evaluate(() => document.querySelector('h1').innerText);

console.log(`Page Title: ${pageTitle}`);
console.log(`Page Header: ${pageHeader}`);
await browser.close();

