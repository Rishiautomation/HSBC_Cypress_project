describe("HSBC_Login_Test", () => {
  it("Login Test", () => {
    cy.visit("https://www.hsbc.co.in/");
    cy.get("img[alt='HSBC India Bank']").should("be.visible");
    cy.title().should(
      "eq",
      "HSBC India - Credit Cards, NRI Services, Saving and Deposit"
    );
    cy.contains("Log On").click({ force: true });
    cy.wait(5000);
    cy.xpath("//span[text()='Continue to log on with browser']").click();
    cy.wait(2000);
    cy.get(".header-main-navigation.lg-10")
      .should("be.visible")
      .within(() => {
        cy.contains("Banking").should("be.visible");
        cy.contains("Borrowing").should("be.visible");
        cy.contains("Investing").should("be.visible");
        cy.contains("NRI").should("be.visible");
        cy.contains("Offers").should("be.visible");
      });

    cy.get("#username_submit_btn").should("be.visible");

    cy.get("#username_submit_btn").should("be.disabled");

    cy.get("#username").type("xyz@gmail.com");

    cy.get("#username_submit_btn").should("not.be.disabled");

    cy.get("#rememberMe").should("not.be.checked");

    cy.get(".icon.icon-circle-help-solid.help-icon").should("be.visible");

    cy.get(".icon.icon-circle-help-solid.help-icon").click();

    cy.contains("Username").should("be.visible");

    cy.xpath("//span[@class='icon icon-delete']").click();

    cy.screenshot("screenshots_Login_test");
  });
});
