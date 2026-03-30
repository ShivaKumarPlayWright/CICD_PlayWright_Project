import {test} from '../fixtures/loginFixture';
import LoginPage from '../Pages/LoginPage';
import LoginData from '../testdata/LoginData.json';
test('Login page script', async ({page}) => {   
    let loginPage = new LoginPage(page);
    await page.goto('https://automationexercise.com/login');
    await page.screenshot({path: 'LoginPage.png'});
    await loginPage.login(LoginData.username,LoginData.emailid);
});