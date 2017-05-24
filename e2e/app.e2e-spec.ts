import { Mathjs601Page } from './app.po';

describe('mathjs601 App', () => {
  let page: Mathjs601Page;

  beforeEach(() => {
    page = new Mathjs601Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
