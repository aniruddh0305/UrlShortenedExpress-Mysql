import mysql from "mysql2/promise";
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} from "./env.js";


console.log("@@@ DATABASE_HOST:", DATABASE_HOST);
console.log("@@@ DATABASE_NAME:", DATABASE_NAME);
console.log("@@@ DATABASE_USERNAME:", DATABASE_USERNAME);
export const db = await mysql.createConnection({
  host: DATABASE_HOST,
  user: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
});
// create the database and table from the workbench
