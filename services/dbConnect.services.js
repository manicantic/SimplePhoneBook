'use strict'

const pg = require('pg');
const q = require('q');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/SimplePhoneBook';
const config = {
  user: process.env.PGUSER || 'postgres', //env var: PGUSER 
  database: process.env.PGDATABASE || 'SimplePhoneBook', //env var: PGDATABASE 
  password: process.env.PGPASSWORD || 'postgres', //env var: PGPASSWORD 
  host: process.env.PGHOST || 'localhost', // Server hosting the postgres database 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
};
const pool = new pg.Pool(config);

function doQuery(query,data){
    let deferred = q.defer();
    pool.connect(function(err, client, done) {
     if(err) {
        return deferred.reject(err);
     }
     console.log(query,data);
     client.query(query,data, function(err, result) {
    done(err);
 
    if(err) {
        console.log(err);
        return deferred.reject(err);
    }
    console.log(result);
    console.log(result.rows);
    if( result.rows.length==0){
        deferred.resolve(undefined);
    }
    else if(result.rows.length==1) {
        deferred.resolve(result.rows[0]);
    }
    else{
        deferred.resolve(result.rows);
    }
     });
    });
    return deferred.promise;
}

function doInsert(query,data){
    let deferred = q.defer();
    pool.connect(function(err, client, done) {
     if(err) {
         return deferred.reject(err);
     }
     console.log(query,data);
     client.query(query,data, function(err, result) {
    done(err);
 
    if(err) {
        console.log(err);
        return deferred.reject(err);
    }
    console.log(result);
    console.log(result.rows);
   deferred.resolve(result.rowCount);
     });
    });
    return deferred.promise;
}

module.exports = {
    doQuery,
    doInsert
}