import { userMockService } from "../services/index.js";
import UserDTO from "../dto/User.dto.js";

export const generateUserMocks = async (req, res) => {
  try {
    const quantity = parseInt(req.query.qty) || 50;
    const users = await userMockService.generateMockUsers(quantity);

    const userDTO = users.map((u) => UserDTO.getUserTokenFrom(u));

    res.status(201).json({
      status: "success",
      payload: userDTO,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
