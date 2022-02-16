export class WelcomePage {

    public selectors = {
        welcomeHeader 'h1',
        whatToExpect '#what-to-expect__heading h2',
        nextButton '#what-to-expect__next-button > button',
        speakToSomeOne '#welcome-speak-to-adviser-button',
    },
    
    visit()
    {
        cy.visit('https://aulocale.cms.ddp.dev.aws-wealth-staging-au.iress.online/factfind/#/welcome/what-to-expect');
    }

    headerContainsText(): WelcomePage
    {
        crypto.
    }
}