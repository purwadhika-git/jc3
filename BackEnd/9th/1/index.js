const mysql = require('mysql');

const conn = mysql.createConnection({
    host : "localhost",
    port : 3307,
    user : "root",
    password : "root",
    database : "sakila"
});

var id = "1 ";

conn.connect((err) => {
    if(err) throw err;

    conn.query(" SELECT * FROM actor WHERE actor_id = " + id + " LIMIT 10 ", (err, result, fields) => {
        if(err) throw err;
        console.log(fields);
    });

    // conn.beginTransaction(() => {

    //     conn.query(" SELECT * FROM actor WHERE actor_id = ? LIMIT ? ", [id, 10], (err, result, fields) => {
    //         if(err){ 
    //             return conn.rollback((error) => {
    //                 throw err;
    //             })
    //         };
            
    //         conn.query(" SELECT * FROM film LIMIT 10 ", (err, result, fields) => {
    //             if(err){ 
    //                 return conn.rollback((error) => {
    //                     throw err;
    //                 })
    //             };

    //             conn.commit((err) => {
    //                 if(err){ 
    //                     return conn.rollback((error) => {
    //                         throw err;
    //                     })
    //                 };
    //             })
                
    //         });
    
    //     });

    // });

});