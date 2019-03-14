const conn = require('./db');
const query = function (sql,arg) {
    return new Promise((resolve, reject) => {
        conn.query(sql, arg, function (error, results) {
            if(error){
                reject(error);
            }else{
                resolve(results)
            }
        });
    })
}
module.exports = query;