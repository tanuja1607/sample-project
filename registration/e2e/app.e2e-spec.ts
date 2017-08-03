import { RegistrationformPage } from './app.po';

describe('registrationform App', () => {
  let page: RegistrationformPage;

  beforeEach(() => {
    page = new RegistrationformPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
