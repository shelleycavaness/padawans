import db from "../../setup/database";

const Query = {
  getAll: () => {
    let sqlQuery = "SELECT * FROM skills";
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getById: id => {
    let sqlQuery = `SELECT modules.module_name, skills.skill_name FROM skills INNER JOIN modules ON skills.modules_id = modules.id WHERE modules.id=${id}`;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getByModule: id => {
    let sqlQuery = `SELECT * FROM skills WHERE modules_id= ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }
};

export default Query;
