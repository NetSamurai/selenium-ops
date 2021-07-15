/**
 * By: noblesigma
 * Date: 7/15/2021
 * Description: Using js+selenium to automate part of completion of a form retrieving passport information.
 * WIP / Skeleton code
 * No copyright
 */

var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

/** 
 * Set chrome command line options/switches
*/      
var chromeOptions = new chrome.Options();
// chromeOptions.addArguments("--headless");
chromeOptions.addArguments("--disable-gpu");
chromeOptions.addArguments("--window-size=1920,1200");
chromeOptions.addArguments("--ignore-certificate-errors");
chromeOptions.addArguments("--disable-extensions");
chromeOptions.addArguments("--no-sandbox");
chromeOptions.addArguments("--disable-dev-shm-usage");
chromeOptions.addArguments("--js-flags=--expose-gc");
chromeOptions.addArguments("--enable-precise-memory-info");
chromeOptions.addArguments("--disable-popup-blocking");
chromeOptions.addArguments("--disable-default-apps");
chromeOptions.addArguments("--disable-infobars");

var driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
   
async function main () {

    var dateOfTravel = "07/31/2021";

    try {
        // Go to first page 
        await driver.get("https://something.form.com/");

        var inputField = await driver.findElement(webdriver.By.id("rb-home-list-new")).click();

        // Go to second page
        inputField = await driver.findElement(webdriver.By.id("btnHomeNext"));
        await inputField.sendKeys(" ", webdriver.Key.ENTER);
    
        await driver.wait(webdriver.until.titleMatches(/Travel Plans | Online/i), 5000);

        // Enter fields
        inputField = await driver.findElement(webdriver.By.id("InternationalTravel-yes")).click();

        inputField = await driver.findElement(webdriver.By.id("DateTravel"));
        await inputField.sendKeys(dateOfTravel, webdriver.Key.ENTER);

        inputField = await driver.findElement(webdriver.By.id("VisaNeeded-no")).click();

        inputField = await driver.findElement(webdriver.By.xpath("//*[@data-val='1']")).click();

        // inputField = await driver.findElement(webdriver.By.xpath("//*[@data-val='1']"));

        // Use last number box as anchor to get the capcha checked
        // inputField = await driver.findElement(webdriver.By.className("recaptcha-checkbox")).click();

        // await inputField.sendKeys( webdriver.Key.ENTER );

        // We should be near page 3
        // await inputField.sendKeys( webdriver.Key.TAB );
        // await inputField.sendKeys( webdriver.Key.ENTER );

        
        // Wait 2 sec
        await sleep(2000)
        function sleep(ms) {
             return new Promise( ( resolve ) => {
                 setTimeout( resolve, ms );
             } );
        }


    } catch (e) {
        console.log( e );
        // await inputField.submit(); // this helps in mobile browsers
    }

    // \\ await driver.quit();
}

main();