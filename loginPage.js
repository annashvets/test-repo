const PageBase = require("./pageBase");

class LoginPage extends PageBase {
    constructor (title) {
        super(title);
    }
    login(username, password) {
        console.log(`User with username ${username} and password ${password} logged in`);

    }
}

module.exports = LoginPage;