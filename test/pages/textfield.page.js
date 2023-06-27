const Page = require("./page");

class TextFieldPage extends Page {
    // get textFieldSelector () { return $(`~enter-text-box-acc-id`); };
    get textFieldSelector () {
        const selectorAndroid = `~enter-text-box-acc-id`;
        const selectorIOS = `~TextField`;
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }

    get submitTextSelector () { return $(`~enter-text-btn-acc-id`); };

    //get enteredTextLabelSelector () { return $(`~entered-txt-label-acc-id`); };
    get enteredTextLabelSelector () {
        const selectorAndroid = `~entered-txt-label-acc-id`;
        const selectorIOS = `~SubmittedTextLabel`;
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selector}`);
    }
    get textFieldPageGoBackButtonSelector () { return $(`~text-page-go-back-acc-id`); };

    async enterTextInField(textToEnter) {
        await this.textFieldSelector.waitForDisplayed({ timeout: 10000});
        await this.textFieldSelector.setValue(textToEnter);

        if (driver.isAndroid) {
            await this.submitTextSelector.click();
        }
        
    }

    async goBackToHomePage() {
        await this.textFieldPageGoBackButtonSelector.waitForDisplayed({ timeout: 10000 });
        await this.textFieldPageGoBackButtonSelector.click();   
    }
}

module.exports = new TextFieldPage();