import FormPage from "../../pageObjects/formPage";

describe("Final-task", () => {
  beforeEach(() => {
    FormPage.visit();
  });

  it.only("Filling form and testing result", () => {

    cy.fixture('formData').then(data => {

      // Filling form

      FormPage.firstNameInput.type(data.firstName);
      FormPage.lastNameInput.type(data.lastName);
      FormPage.emailInput.type(data.email);
      FormPage.genderSelectLabels.contains(data.gender).click();
      FormPage.mobileNumberInput.type(data.mobileNumber);
      FormPage.dateOfBirthInput.click();
  
      FormPage.dateMonthSelect.select(data.dateMonth);
      FormPage.dateYearSelect.select(data.dateYear);
      FormPage.dateDayInMonth(data.dateMonth).contains(data.dateDay).click();
  
      FormPage.subjectsInput.type(data.subject);
      FormPage.subjectsOptions.contains(data.subject).click();
      FormPage.hobbiesSelectLabels.contains(data.hobbie).click();
      
      FormPage.uploadPictureInput.selectFile("cypress/files/" + data.image);
      FormPage.currentAddressInput.type(data.currentAddress);
  
      FormPage.stateWrapperDivs.contains("Select State").click();
      FormPage.stateWrapperDivs.contains(data.state).click();
      FormPage.cityWrapperDivs.contains("Select City").click();
      FormPage.cityWrapperDivs.contains(data.city).click();
  
      FormPage.submitButton.click();
  
      // Testing results
  
      FormPage.matchingTableRowCell("Student Name")
        .should("contain", data.firstName + " " + data.lastName);
      FormPage.matchingTableRowCell("Student Email")
        .should("contain", data.email);
      FormPage.matchingTableRowCell("Gender")
        .should("contain", data.gender);
      FormPage.matchingTableRowCell("Mobile")
        .should("contain", data.mobileNumber);
      FormPage.matchingTableRowCell("Date of Birth")
        .should("contain", data.dateDay + " " + data.dateMonth + "," + data.dateYear);
      FormPage.matchingTableRowCell("Subjects")
        .should("contain", data.subject);
      FormPage.matchingTableRowCell("Hobbies")
        .should("contain", data.hobbie);
      FormPage.matchingTableRowCell("Picture")
        .should("contain", data.image);
      FormPage.matchingTableRowCell("Address")
        .should("contain", data.currentAddress);
      FormPage.matchingTableRowCell("State and City")
        .should("contain", data.state + " " + data.city);

    });
  });
});