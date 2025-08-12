import petModel from "./models/Pet.js";
import { faker } from "@faker-js/faker";

export default class PetMocksDAO {
  constructor() {
    this.model = petModel;
  }

  async generateMockPets(quantity = 10) {
    try {
      const mockPets = [];

      for (let i = 0; i < quantity; i++) {
        mockPets.push({
          name: faker.person.firstName(),
          specie: faker.animal.type(),
          birthDate: faker.date.past({ years: 5 }),
          adopted: faker.datatype.boolean(),
          image: faker.image.urlLoremFlickr({ category: "animal" }),
        });
      }

      await this.model.deleteMany({});

      const result = await this.model.insertMany(mockPets);
      return result;
    } catch (error) {
      throw new Error(`Error generating mock pets: ${error.message}`);
    }
  }
}
