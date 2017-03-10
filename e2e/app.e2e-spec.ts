import { Ngbook2SporitifyPage } from './app.po';

describe('ngbook2-sporitify App', () => {
  let page: Ngbook2SporitifyPage;

  beforeEach(() => {
    page = new Ngbook2SporitifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
