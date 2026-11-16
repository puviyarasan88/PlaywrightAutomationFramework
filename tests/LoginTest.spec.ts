import {test} from '../fixtures/pom-fixtures'

test("Login", async({page, loginPage})=> {
    await loginPage.openOrangeCRM();
    await loginPage.login("Admin", "admin123")
    
})