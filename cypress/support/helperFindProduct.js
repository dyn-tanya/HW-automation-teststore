export function findProduct(productName) {

    cy.log('Search product')
    cy.get('#filter_keyword').type('E');
    cy.get('[title="Go"]').click();

    for (let i = 1; i <= 3; i++) {
        cy.get('.fixed [title]').then((result) => {

            if (result.text().includes(productName)) {
                return;

            }
            else {
                cy.get(`.pagination [href]:contains(${i + 1})`).click()
            }

        })

    }

    cy.contains(productName).click()
    cy.get('.bgnone').should('contain', productName);
}


