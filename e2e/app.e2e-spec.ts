import { SwissManagerPage } from './app.po';

describe('swiss-manager App', () => {
  let page: SwissManagerPage;

  beforeEach(() => {
    page = new SwissManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
