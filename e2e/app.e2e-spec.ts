import { KeycoPage } from './app.po';

describe('keyco App', () => {
  let page: KeycoPage;

  beforeEach(() => {
    page = new KeycoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
