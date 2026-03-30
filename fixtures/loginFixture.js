

//test change as base because To extend it with custom fixtures
// To avoid conflict with default test
import { test as base } from '@playwright/test';
//Importing  Page Object class
import LoginPage from '../fixtures/loginFixture';
export const test = base.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});
