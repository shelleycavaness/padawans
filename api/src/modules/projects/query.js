import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Query = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `projects`";

        db.query(sqlQuery , (err, rows, fields, res) => {
            
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return failureCallback("No projects.");
            }
        })
    }
}

export default Query