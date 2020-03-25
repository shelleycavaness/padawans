import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Query = {
  
  register:(user) => {
        return new Promise((resolve, reject) => {
            let sqlQuery = "INSERT INTO users (username, password,email, role) values(?,?,?,?)";
            db.query(sqlQuery,[user.username, user.hashedPassword, user.email, user.role], (err, res) => {
                if (err) reject(err)
                resolve(res);
            })
        })
    },
     findById:(id) => {
        return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM users WHERE id="${id}"`;
            db.query(sqlQuery, (err, rows) => {
                if (err) reject(err)
                resolve(rows[0]);
            })
        })
    },
    authenticate: (user, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * FROM users WHERE username="${user.username}" AND password="${user.password}"`;

        db.query(sqlQuery, (err, rows) => {

            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows[0]);
            } else {
                return successCallback("Incorrect username or password combinaison");
            }
        })
    },
    getByUsername: (username) => {
        let sqlQuery = "SELECT * FROM users WHERE username=?";

        return new Promise((resolve, reject) => {
            db.query(sqlQuery,[username],(err, rows) => {
                if (err) reject(err)
                resolve(rows[0])
            })
        })
    },
    getAll: () => {
        let sqlQuery = "SELECT * FROM users";
        return new Promise((resolve, reject) => {
            db.query(sqlQuery, (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            })
        })
    }
};

export default Query;
