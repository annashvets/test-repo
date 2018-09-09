let WebControl = require("../base/web.control");

class WebButton extends WebControl {
    constructor(webElement, title) {
        super(webElement, title);
    }
}

module.exports = WebButton;