import db from "../../setup/database";

const Query = {
  getAll: () => {
    let sqlQuery = "SELECT * FROM modules";
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getSkills: () => {
    let sqlQuery =
      "SELECT modules.id_modules, modules.module_name, skills.id_skills, skills.skill_name FROM modules INNER JOIN skills ON modules.id_modules = skills.modules_id ORDER BY modules.id_modules";
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },

  getById: (id) => {
    let sqlQuery = `SELECT * FROM modules WHERE id_modules=?`;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getByModule: (id) => {
    console.log("----id", id);
    let sqlQuery = "SELECT * FROM skills WHERE skills.modules_id=?";
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
};

export default Query;
