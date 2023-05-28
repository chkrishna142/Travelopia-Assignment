describe("formsubmission", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("should have all inputs", () => {
        cy.get("input[name='name']").should("exist");
        cy.get("input[name='emailid']").should("exist");
        cy.get("input[name='travellers']").should("exist");
        cy.get("input[name='budget']").should("exist");


    })
    it("should select the following destination", () => {
        cy.get("select[name='place']").should("exist");
        cy.get("select[name='place']").find("option").contains("India")
        cy.get("select[name='place']").find("option").contains("Africa")
        cy.get("select[name='place']").find("option").contains("Europe")
    })
    it("submit button exist", () => {
        cy.get(".submitButton").should("exist");

    })
    it("data sucessfully submmited", () => {
        cy.get("input[name='name']").type("krish");
        cy.get("input[name='emailid']").type("k@gmail.com");
        cy.get("select[name='place']").select("Africa");
        cy.get("input[name='travellers']").type(4);
        cy.get("input[name='budget']").type(4000);
        cy.get(".submitButton").click();
        cy.wait(5000)

        cy.get(".loadedComponent").contains("Your Form submitted");

    })





})

describe("dataExist", () => {
    const [name, emailid, destination, travellers, budget] = ['krish', 'k@gmail.com', 'Africa', 4, 4000];

    beforeEach(() => {
        cy.visit("http://localhost:3000/dashboard")
    })

    it("tableExist", () => {

        cy.get("table").should("exist")


    })

    it("tableDataExist", () => {

        let currentPage;

        cy.get('.lastPageNum')
            .invoke('text')
            .then((currentPageText) => {
                currentPage = parseInt(currentPageText, 10);
                cy.log('Current Page: ' + currentPage);
            })
            .then(() => {

                for (let i = 1; i < currentPage; i++) {
                    cy.get(".nextBtn").click();
                }
            });






        cy.get('tbody').contains(name);
        cy.get('tbody').contains(emailid);
        cy.get('tbody').contains(destination);
        cy.get('tbody').contains(travellers);
        cy.get('tbody').contains(budget);
    })
})