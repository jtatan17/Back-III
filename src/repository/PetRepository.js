import GenericRepository from "./GenericRepository.js";

export default class PetRepository extends GenericRepository {
  constructor(dao) {
    super(dao);
  }
  generateMockPets = async (quantity) => {
    return await this.dao.generateMockPets(quantity);
  };
}
