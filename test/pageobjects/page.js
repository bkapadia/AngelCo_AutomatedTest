const casual = require("casual");
export default class Page {

  open (path) {
    browser.url(path)
  }

  static randomValue() {
     return casual.unix_time.toString() + casual.state_abbr;
  }

  static clickWhenVisible(element) {
    browser.waitForVisible(element);
    browser.element(element).click();
  }
}
module.exports = Page;
