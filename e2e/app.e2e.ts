import { Angularfire2ProjectV2Page } from './app.po';

describe('angularfire2-project-v2 App', function() {
  let page: Angularfire2ProjectV2Page;

  beforeEach(() => {
    page = new Angularfire2ProjectV2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angularfire2-project-v2 works!');
  });
});
