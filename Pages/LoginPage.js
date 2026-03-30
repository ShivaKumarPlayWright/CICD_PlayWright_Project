class LoginPage {
    constructor(page) {
        this.page = page;       
        this.usernameInput = page.getByPlaceholder('Name');
        this.emailIdInput = page.getByPlaceholder('Email Address').nth(1);
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }       
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.emailIdInput.fill(password);
        await this.loginButton.click();
    }       
}

export default LoginPage;