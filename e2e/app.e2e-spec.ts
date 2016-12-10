import { EventsNgPage } from './app.po';

describe('events-ng App', function() {
  let page: EventsNgPage;

  beforeEach(() => {
    page = new EventsNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
