class Treecheckbox
{
    clickOnElements()
    {
        cy.contains('Elements').click()
    }
    clickOnCheckboxmenu()
    {
        cy.contains('span','Check Box').click()

    }
    clickOnhome()
    {
        cy.get('[role="checkbox"]').click()
    }
    uncheckHomebtn()
    {
        cy.get('[aria-label="Select Home"]').click()
        
    }
    getHomecheckbox()
    {
        return cy.get('[aria-label="Select Home"]').click()
    }
    clickExpandIcon()
    {
        cy.get('span.rc-tree-switcher.rc-tree-switcher_close').click()

    }
    clickOnDesktop()
    {
        cy.get('aria-label="Select Desktop"').click()

    }
    getResult()
    {
        return cy.get('#result')
    }

}
export default new Treecheckbox();