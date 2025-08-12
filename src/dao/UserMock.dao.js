import userModel from "./models/User.js";
import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

export default class UserMocksDAO {
  constructor() {
    this.model = userModel;
  }

  async generateMockUsers(quantity = 10) {
    try {
      const mockUsers = [];
      const hashedPassword = await createHash("coder123");
      for (let i = 0; i < quantity; i++) {
        mockUsers.push({
          first_name: faker.person.firstName(),
          last_name: faker.person.lastName(),
          email: faker.internet.email(),
          password: hashedPassword,
          role: faker.helpers.arrayElement(["user", "admin"]),
          pets: [],
        });
      }

      await this.model.deleteMany({});

      const result = await this.model.insertMany(mockUsers);
      return result;
    } catch (error) {
      throw new Error(`Error generating mock users: ${error.message}`);
    }
  }
}
