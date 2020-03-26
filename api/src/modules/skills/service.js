import skillQueries from "./query";
import jwt from "jsonwebtoken";
import config from "../../config/server";

const SkillService = {
  getAll: async () => {
    return skillQueries
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
    return skillQueries
      .getById(id)
      .then(response => ({
        status: 200,
        payload: { success: true, data: response }
      }))
      .catch(err => ({
        status: 400,
        payload: { success: false, message: err }
      }));
  },
  getByModule: async id => {
    return skillQueries
      .getByModule(id)
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
export default SkillService;
