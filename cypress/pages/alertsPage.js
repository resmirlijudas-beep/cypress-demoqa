class Alerts{

    openAlertsPage(){
        cy.contains('Alerts, Frame & Windows').click()
        cy.contains('span.text','Alerts').click()
    }
    simpleAlertBtn(){
        return cy.get('#alertButton')
    }
    timerAlertBtn(){
      return cy.get('#timerAlertButton')
    }

    confirmAlertBtn(){
        return cy.get('#confirmButton')
    }

    promptAlertBtn(){
        return cy.get('#promtButton')
    }



}
export default new Alerts();