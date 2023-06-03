/// <reference types="cypress"/>

it('Create-an-order', () => {
  cy.visit('https://automationteststore.com/');

  cy.get('#filter_keyword').type('Shampoo {enter}');
  cy.get('[title="Curls to straight Shampoo"]').click();

  cy.get('#product_quantity').clear().type('3');
  cy.get('.productpagecart').click()

  cy.get('#estimate_country').select('Ukraine');
  cy.get('#estimate_country_zones').select('Dnipro');
  cy.get('#estimate_postcode').type('12345');

  cy.get('#cart_checkout2').click();

  cy.get('#loginFrm_loginname').type('dyntanyaa14');
  cy.get('#loginFrm_password').type('qwerty54');
  cy.get('[title="Login"]').click();

  cy.get('#checkout_btn').click();
  cy.get('.heading1').should('contain', 'Your Order Has Been Processed!');
})
