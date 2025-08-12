import GenericRepository from "./GenericRepository.js";

export default class UserRepository extends GenericRepository {
  constructor(dao) {
    super(dao);
  }

  getUserByEmail = (email) => {
    return this.getBy({ email });
  };
  getUserById = (id) => {
    return this.getBy({ _id: id });
  };
  async create(user) {
    return await this.dao.create(user);
  }
  generateMockUsers = async (quantity) => {
    return await this.dao.generateMockUsers(quantity);
  };
}
