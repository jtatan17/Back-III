// src/controllers/petMocks.controller.js
import { petMockService } from "../services/index.js";
import PetDTO from "../dto/PetMock.dto.js";

export const generatePetMocks = async (req, res) => {
  try {
    const quantity = parseInt(req.query.qty) || 5; // default to 10 pets
    const pets = await petMockService.generateMockPets(quantity);

    // Map to DTOs before sending
    const petsDTO = pets.map((p) => new PetDTO(p));

    res.status(201).json({
      status: "success",
      payload: petsDTO,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
