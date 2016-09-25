import { Ejem1Page } from './app.po';

describe('ejem1 App', function() {
  let page: Ejem1Page;

  beforeEach(() => {
    page = new Ejem1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
