import {test as base} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

type PomFixtures = {
    loginPage: LoginPage
}

export const test = base.extend<PomFixtures>({
    loginPage : async({page}, use)=> {
        use(new LoginPage(page))
    }
})
