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
    let sqlQuery = `SELECT modules.module_name, skills.skill_name FROM skills,modules WHERE skills.modules_id = modules.id AND skills.id=?`;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getByModule: id => {
    let sqlQuery = `
    SELECT skills.modules_id,modules.module_name, skills.id,skills.skill_name
     FROM skills,modules 
     WHERE skills.modules_id=?AND skills.modules_id=modules.id`;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getPadawans: id => {
    console.log("padawans querie========" + id);

    let sqlQuery = `
      SELECT padawans.first_name, padawans.last_name, skills.skill_name,levels.level_name
      FROM padawans_has_skills, padawans, skills,levels
      WHERE padawans_has_skills.skills_id=?
      AND
      padawans_has_skills.padawans_id=padawans.id
      AND 
      skills.id=?
      AND 
      padawans_has_skills.levels_id=levels.id
      ORDER BY levels.id 
     
       `;

    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id, id], (err, rows) => {
        console.log(rows);
        if (err) reject(err);
        resolve(rows);
      });
    });
  }
};

export default Query;
