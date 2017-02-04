import { CustomDropDownPage } from './app.po';

describe('custom-drop-down App', function() {
  let page: CustomDropDownPage;

  beforeEach(() => {
    page = new CustomDropDownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
