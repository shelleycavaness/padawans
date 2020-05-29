import db from "../../setup/database";

const Query = {
  register: (padawan) => {
    return new Promise((resolve, reject) => {
      let sqlQuery =
        "INSERT INTO padawans(first_name,last_name, email, password) values(?,?,?,?)";
      db.query(
        sqlQuery,
        [
          padawan.firstname,
          padawan.lastname,
          padawan.email,
          padawan.hashedPassword,
        ],
        (err, res) => {
          if (err) reject(err);
          resolve(res);
        }
      );
    });
  },
  getAll: () => {
    let sqlQuery = "SELECT * FROM padawans";
    return new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },

  getById: (id) => {
    let sqlQuery = "SELECT * from padawans WHERE id_padawans=?";

    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [id], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  },
  getByEmail: (email) => {
    let sqlQuery = "SELECT * from padawans WHERE email=?";

    return new Promise((resolve, reject) => {
      db.query(sqlQuery, [email], (err, rows) => {
        if (err) reject(err);
        resolve(rows[0]);
      });
    });
  },
};

export default Query;
