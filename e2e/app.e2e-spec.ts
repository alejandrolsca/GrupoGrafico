import { GrupograficoPage } from './app.po';

describe('grupografico App', function() {
  let page: GrupograficoPage;

  beforeEach(() => {
    page = new GrupograficoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
