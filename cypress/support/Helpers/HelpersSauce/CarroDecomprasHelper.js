import Checkout from "../../../Pages/SauceDemo/Checkout";
import { faker } from "@faker-js/faker";

const checkout = new Checkout();

class FormHelper {
  completeForm() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const zipCode = faker.string.numeric(4);

    checkout.typeFirstname(firstName);
    checkout.typeLastname(lastName);
    checkout.typeZipCode(zipCode);
    checkout.clickButtonContinue();
  }
}

export default new FormHelper();
