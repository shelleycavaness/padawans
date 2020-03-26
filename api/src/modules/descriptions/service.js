import descriptionQueries from "./query";
import jwt from "jsonwebtoken";
import config from "../../config/server";

const DescriptionService = {
  getBySkill: async id => {
    return descriptionQueries
      .getBySkill(id)
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
export default DescriptionService;
