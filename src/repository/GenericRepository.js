export default class GenericRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = (params) => {
    return this.dao.get(params);
  };

  getBy = (params) => {
    return this.dao.getBy(params);
  };

  create = (data) => {
    return this.dao.create(data);
  };

  update = (id, doc) => {
    return this.dao.update(id, doc);
  };

  delete = (id) => {
    return this.dao.delete(id);
  };
}
