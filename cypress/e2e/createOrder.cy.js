import { findProduct } from '../support/helperFindProduct'

let user = {
    nameproduct: 'Fiorella Purple Peep Toes',
    username: 'dyntanyaa14',
    password: 'qwerty54',
    country: 'Ukraine',
    city: 'Dnipro',
    postcode: '12345'
}

it('Create an order', () => {

    cy.visit('https://automationteststore.com/');

    findProduct(user.nameproduct);

    cy.log('Create an order')
    cy.get('.productpagecart').click()

    cy.get('#estimate_country').select(user.country);
    cy.get('#estimate_country_zones').select(user.city);
    cy.get('#estimate_postcode').type(user.postcode);

    cy.get('#cart_checkout2').click();

    cy.get('#loginFrm_loginname').type(user.username);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('[title="Login"]').click();

    cy.get('#checkout_btn').click();
    cy.get('.heading1').should('contain', 'Your Order Has Been Processed!');
})