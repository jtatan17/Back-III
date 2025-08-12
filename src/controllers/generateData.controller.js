import { userMockService, petMockService } from "../services/index.js";
import UserDTO from "../dto/User.dto.js";
import PetDTO from "../dto/PetMock.dto.js";

export const generateData = async (req, res) => {
  try {
    const userQty = parseInt(req.query.users || req.body.users) || 0;
    const petQty = parseInt(req.query.pets || req.body.pets) || 0;

    const tasks = [];

    if (userQty > 0) {
      tasks.push(
        userMockService.generateMockUsers(userQty).then((users) => ({
          type: "users",
          data: users.map((u) => UserDTO.getUserTokenFrom(u)),
        }))
      );
    }

    if (petQty > 0) {
      tasks.push(
        petMockService.generateMockPets(petQty).then((pets) => ({
          type: "pets",
          data: pets.map((p) => new PetDTO(p)),
        }))
      );
    }

    // Run all tasks in parallel
    const results = await Promise.all(tasks);

    // Shape response into an object with keys for each type
    const payload = {};
    results.forEach((result) => {
      payload[result.type] = result.data;
    });
    console.log(payload);
    res.status(201).json({
      status: "success",
      payload,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
