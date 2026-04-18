class Broken{


  clickBrokenImgBtn(){
        cy.contains('span.text','Broken Links - Images').click()
    }

    validImage()
    {
        return cy.get('img[src="/images/Toolsqa.jpg"]')
    }
    brokenImage()
    {
        return cy.get('img[src="/images/Toolsqa_1.jpg"]')

    }
    validLink()
     {

       return cy.contains('a', 'Click Here for Valid Link')
    }

  brokenLink() 
  {
    return cy.contains('a', 'Click Here for Broken Link')
  }


}
export default new Broken();
