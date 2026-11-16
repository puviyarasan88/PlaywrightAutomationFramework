import {test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test("Login", async({page})=> {
    const loginpage = new LoginPage(page);

    await loginpage.openOrangeCRM();
    await loginpage.login("Admin", "admin123")
    
})