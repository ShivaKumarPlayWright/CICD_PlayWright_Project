import {test} from '@playwright/test';

test('First Playwright Script', async ({page}) => {
    await page.goto('https://www.amazon.in/');
    await page.screenshot({path: 'screenshot.png'});
});
