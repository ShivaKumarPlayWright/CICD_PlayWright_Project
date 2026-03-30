import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  let frames=await page.locator("//iframe");

  log(await frames.count());
  for(let i=0;i<await frames.count();i++){
    log(await frames.nth(i).getAttribute('id'));
  }
  
});