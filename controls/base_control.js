class BaseControl {

    constructor(protractorElement, controlName) {
        this.protractorElement = protractorElement;
        this.controlName = controlName;
    }

    async click() {
        await this.protractorElement.click();
    }

    getText() {
        return this.protractorElement.getText();
    }
    
}


module.exports = BaseControl;