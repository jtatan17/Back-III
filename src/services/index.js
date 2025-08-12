import Users from "../dao/Users.dao.js";
import Pet from "../dao/Pets.dao.js";
import Adoption from "../dao/Adoption.js";
import PetMocksDAO from "../dao/PetMocks.dao.js";
import UserMocksDAO from "../dao/UserMock.dao.js";

import UserRepository from "../repository/UserRepository.js";
import PetRepository from "../repository/PetRepository.js";
import AdoptionRepository from "../repository/AdoptionRepository.js";

export const usersService = new UserRepository(new Users());
export const petsService = new PetRepository(new Pet());
export const adoptionsService = new AdoptionRepository(new Adoption());
export const petMockService = new PetRepository(new PetMocksDAO());
export const userMockService = new UserRepository(new UserMocksDAO());
