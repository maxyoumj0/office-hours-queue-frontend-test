const {Builder, By, Key, until} = require('selenium-webdriver');
let webdriver = require('selenium-webdriver');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

(async function example() {
  let driver = await new Builder().withCapabilities({'browserName': 'firefox', acceptSslCerts: true, acceptInsecureCerts: true}).build();
  const button_selector = "body > div > section > div > div > div:nth-child(2) > div > div > section:nth-child(3) > div > div.block > div > div.column.is-two-thirds > div > button.button.is-success.level-item > span:nth-child(2)";
  try {
    // navigate to course url
    await driver.get('https://lvh.me:8080/queues/27xCqMHnGre0qrglCpa3pL1ag5Y');
    await sleep(3000)
    // check if button exists
    await driver.findElements(webdriver.By.css(button_selector)).then(function(webElement) {
        console.log('Appointment Summary button exists');
    }, function(err) {
        if (err.state && err.state === 'no such element') {
            console.log('Appointment Summary button not found');
        } else {
            console.log(err)
        }
    });

    // log container check
    const container_selector = "body > div.modal.is-active > div.animation-content > div";
    await driver.findElements(webdriver.By.css(container_selector)).then(() => {
        console.log("container exists");
    }, function(err) {
        if (err.state && err.state === 'no such element') {
            console.log('container for log not found');
        } else {
            console.log(err)
        }
    });
    
    // block check
    const block_selector = "body > div.modal.is-active > div.animation-content > div > section > div";
    await driver.findElements(webdriver.By.css(block_selector)).then(() => {
        console.log("block exists");
    }, function(err) {
        if (err.state && err.state === 'no such element') {
            console.log('block for log not found');
        } else {
            console.log(err)
        }
    });
  } finally {
    await driver.quit();
  }
})();