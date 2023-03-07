import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

// TODO: Add url here
await page.goto("https://example.com/");
await browser.close();
