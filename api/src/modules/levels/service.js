import levelQueries from "./query";
import jwt from "jsonwebtoken";
import config from "../../config/server";

const LevelService = {
  getAll: async () => {
    return levelQueries
      .getAll()
      .then(response => ({
        status: 200,
        payload: { success: true, data: response }
      }))
      .catch(err => ({
        status: 400,
        payload: { success: false, message: err }
      }));
  },
  getById: async id => {
    console.log("ici" + id);
    return levelQueries
      .getById(id)
      .then(response => ({
        status: 200,
        payload: { success: true, data: response }
      }))
      .catch(err => ({
        status: 400,
        payload: { success: false, message: err }
      }));
  }
};
export default LevelService;
