class PageBase {
    constructor(title) {
    
        this.title = title;
        console.log(this.title + " created");
    }

    load(){
        console.log(); 
        }

}
module.exports = PageBase;