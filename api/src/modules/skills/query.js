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
    let sqlQuery = "SELECT * FROM skills WHERE modules_id=?";
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getPadawans: id => {
    console.log("padawans querie========" + id);
    /*
    padawanshasskill: id skill, id 
         "sqlMessage": "Unknown column 'padawans.skills_id' in 'where clause'"
    
    */
    let sqlQuery = `
      SELECT padawans.first_name, padawans.last_name, padawans_has_skills.skills_id, skills.skill_name
      FROM padawans, padawans_has_skills, skills
      WHERE padawans.id=padawans_has_skills.padawans_id
      AND skills.id=?
      AND padawans_has_skills.skills_id=?
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
