

import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Query = {
  
  register:(padawan) => {
        return new Promise((resolve, reject) => {
            let sqlQuery = "INSERT INTO padawans(first_name,last_name, email, password) values(?,?,?,?)";
            db.query(sqlQuery,[padawan.firstname, padawan.lastname, padawan.email,padawan.hashedPassword], (err, res) => {
                if (err) reject(err)
                resolve(res);
            })
        })
    },

   findById:(id, success, fail) => {
    let sqlQuery = `SELECT * FROM padawans WHERE ID=${id}`;

        db.query(sqlQuery, (err, rows) => {
            if(err) { 
                return fail(err);
                }
            if(rows.length > 0) { 
                return success(rows[0])
                }
            else{ 
                return success('no matching id')
            } })     
    },
    // authenticate: (user, successCallback, failureCallback) => {

    //     let sqlQuery = `SELECT * FROM users WHERE username="${user.username}" AND password="${user.password}"`;

    //     db.query(sqlQuery, (err, rows) => {

    //         if (err) {
    //             return failureCallback(err);
    //         }
    //         if (rows.length > 0) {
    //             return successCallback(rows[0]);
    //         } else {
    //             return successCallback("Incorrect username or password combinaison");
    //         }
    //     })
    // },
    // getByUsername: (username) => {
    //     let sqlQuery = "SELECT * FROM users WHERE username=?";

    //     return new Promise((resolve, reject) => {
    //         db.query(sqlQuery,[username],(err, rows) => {
    //             if (err) reject(err)
    //             resolve(rows[0])
    //         })
    //     })
    // },
    getAll: () => {
        let sqlQuery = "SELECT * FROM padawans";
        return new Promise((resolve, reject) => {
            db.query(sqlQuery, (err, rows) => {
                if (err) reject(err)
                resolve(rows)
            })
        })
    }
};

export default Query;
