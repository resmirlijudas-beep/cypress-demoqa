class LinksPage
{
    clicOnLinks()
    {
        cy.contains('span.text', 'Links').click()
    }
    openHomeLink()
    {
        cy.get('#simpleLink')
        .invoke('removeAttr','target')
        .click()
    }
    openDynamicLink()
    {
        return cy.get('#dynamicLink')
        .invoke('removeAttr','target')
        

    }
}
export default new LinksPage();