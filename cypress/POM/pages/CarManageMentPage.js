class CarManageMentPage {
    elements = {
        thressLinesBtn : () => cy.get('#top > div > button.v-btn.v-btn--icon.v-theme--ORANGE_THEME.v-btn--density-default.v-btn'),
    }

    clickThreeLinesBtn() {
        this.elements.thressLinesBtn().click();
    }
}

export default CarManageMentPage;   