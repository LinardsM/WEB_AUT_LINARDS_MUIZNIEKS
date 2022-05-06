import BasePage from "./basePage"

class FormPage extends BasePage {
    
  static get url() {
    return "/automation-practice-form"
  }

  static get firstNameInput() {
    return cy.get("#firstName");
  }

  static get lastNameInput() {
    return cy.get("#lastName");
  }

  static get emailInput() {
    return cy.get("#userEmail");
  }

  static get genderSelectLabels() {
    return cy.get("#genterWrapper label");
  }

  static get mobileNumberInput() {
    return cy.get("#userNumber");
  }

  static get dateOfBirthInput() {
    return cy.get("#dateOfBirthInput");
  }

  static get dateMonthSelect() {
    return cy.get(".react-datepicker__month-dropdown-container--select>select");
  }

  static get dateYearSelect() {
    return cy.get(".react-datepicker__year-dropdown-container--select>select");
  }

  static dateDayInMonth(month) {
    return cy.get(".react-datepicker__day[aria-label*=" + month + "]");
  }

  static get subjectsInput() {
    return cy.get(".subjects-auto-complete__value-container");
  }

  static get subjectsOptions() {
    return cy.get(".subjects-auto-complete__menu>div");
  }

  static get hobbiesSelectLabels() {
    return cy.get("#hobbiesWrapper label");
  }

  static get uploadPictureInput() {
    return cy.get("#uploadPicture");
  }

  static get currentAddressInput() {
    return cy.get("#currentAddress");
  }

  static get stateWrapperDivs() {
    return cy.get("#state>div>div>div");
  }

  static get cityWrapperDivs() {
    return cy.get("#city>div>div>div");
  }

  static get submitButton() {
    return cy.get("#submit");
  }

  static matchingTableRowCell(label) {
    return cy.get("tr>td")
      .contains(label)
      .parent()
      .find('td');
  }
}

export default FormPage;
  