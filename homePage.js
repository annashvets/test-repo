const PageBase = require("./pageBase");

class HomePage extends PageBase{
    constructor(title){
        super(title);
    }

    UserInfo(permissions){
        console.log(`User has ${permissions} permissions`);
    }
    
}

module.exports = HomePage;