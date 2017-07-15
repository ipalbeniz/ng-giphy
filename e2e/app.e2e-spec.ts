import { GiphyProPage } from './app.po';

describe('giphy-pro App', () => {
  let page: GiphyProPage;

  beforeEach(() => {
    page = new GiphyProPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
