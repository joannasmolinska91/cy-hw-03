import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const LoginPage = new Login();
const MyPage = new HomePage();

describe("Website log in test", () => {
  it("Log in and log out", () => {
    LoginPage.navigate(),
      LoginPage.getEmailInput().type("user888@gmail.com"),
      LoginPage.getPasswordInput().type("1234567890"),
      LoginPage.getLogInButton().click(),
      MyPage.getMenuButton().click(),
      MyPage.getLogOutButton1().click();
  });
});
