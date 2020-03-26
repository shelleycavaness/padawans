import db from "../../setup/database";

const Query = {
  getBySkill: id => {
    let sqlQuery = `SELECT  *  FROM descriptions WHERE skills_id= ${id}`;
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }
};

export default Query;
