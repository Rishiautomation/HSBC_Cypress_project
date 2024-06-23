describe("HSBC_Credit_Card_Test", () => {
  it("HSBC_Credit_Card_test", () => {
    cy.visit("https://www.hsbc.co.in/");
    cy.xpath("//span[text()='Banking'][1]").first().trigger("mouseover");
    cy.wait(1000);
    cy.xpath("//h2[text()='Credit Cards']").first().click({ force: true });
    cy.wait(2000);
    cy.xpath("//p[contains(text() ,'Explore and compare')]").should(
      "contain.text",
      "Explore and compare credit cards to find the one that suits you best."
    );
    cy.xpath("//span[contains(text() ,'HSBC Cashback Credit Card')]").click();
    cy.contains("Apply now").should("be.visible");
    cy.url().should(
      "eq",
      "https://www.hsbc.co.in/credit-cards/products/visa-cashback/"
    );
    cy.wait(2000);
    cy.get("#pp_intro_image_3").should("be.visible");

    cy.xpath("//span[contains(text(),'INR999')]").should(
      "contain.text",
      "INR999"
    );

    cy.xpath(
      "//span[contains(text(),'INR999 (waived if you spend more than INR200,000 p')]"
    ).should(
      "contain.text",
      "INR999 (waived if you spend more than INR200,000 per year)"
    );

    cy.get(".LPMimage").should("be.visible");

    cy.xpath("//div[@class='header-logo lg-2']/a/img").click();

    cy.title().should(
      "eq",
      "HSBC India - Credit Cards, NRI Services, Saving and Deposit"
    );

    cy.screenshot("screenshots_Credit_card_test");
  });
});
