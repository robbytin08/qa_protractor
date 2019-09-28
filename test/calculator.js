describe('demo calculator test', function () {
    it('addation test', function () {
        //open browser
        browser.get('http://juliemr.github.io/protractor-demo/');
        //input first form
        element(by.model('first')).sendKeys('12');
        //test select option division
        element(by.model('operator')).$('[value="DIVISION"]').click();
        //input second form
        element(by.model('second')).sendKeys('6');
        //klik go
        element(by.css('[ng-click="doAddition()"]')).click();
        //verify
        element(by.cssContainingText('.ng-binding', '2'));
        browser.sleep(3000)
    })
})