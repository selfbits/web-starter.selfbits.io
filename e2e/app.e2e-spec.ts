import { NgtestprojectPage } from './app.po';

describe('ngtestproject App', () => {
  let page: NgtestprojectPage;

  beforeEach(() => {
    page = new NgtestprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
