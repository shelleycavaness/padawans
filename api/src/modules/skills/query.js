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
  getById: (id) => {
    let sqlQuery = `SELECT modules.module_name, skills.skill_name FROM skills,modules WHERE skills.modules_id = modules.id_modules AND skills.id_skills=?`;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getByModule: (id) => {
    let sqlQuery = `
    SELECT skills.modules_id,modules.module_name, skills.id_skills,skills.skill_name
     FROM skills,modules 
     WHERE skills.modules_id=?AND skills.modules_id=modules.id_modules`;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getPadawans: (id) => {
    let sqlQuery = `
      SELECT padawans.first_name, padawans.last_name, skills.skill_name,levels.level_name
      FROM padawans_has_skills, padawans, skills,levels
      WHERE padawans_has_skills.skills_id=?
      AND
      padawans_has_skills.padawans_id=padawans.id_padawans
      AND 
      skills.id_skills=?
      AND 
      padawans_has_skills.levels_id=levels.id_levels
      ORDER BY levels.id_levels 
     
       `;

    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id, id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
};

export default Query;
