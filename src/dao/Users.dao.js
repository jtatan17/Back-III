import userModel from "./models/User.js";

export default class Users {
  get = async (params) => {
    return await userModel.find(params).lean();
  };

  getBy = async (params) => {
    return await userModel.findOne(params).lean();
  };

  create = async (doc) => {
    return await userModel.create(doc);
  };

  update = async (id, doc) => {
    return await userModel.findByIdAndUpdate(id, { $set: doc }).lean();
  };

  delete = async (id) => {
    return await userModel.findByIdAndDelete(id).lean();
  };
}
