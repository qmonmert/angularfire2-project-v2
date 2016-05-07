export class Angularfire2ProjectV2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angularfire2-project-v2-app h1')).getText();
  }
}
