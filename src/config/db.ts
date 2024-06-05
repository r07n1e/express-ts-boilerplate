import "dotenv/config";
import { Sequelize } from "sequelize";

let sequalizeOpt;
let dbConnection = process.env.DB_CONNECTION;
let dbUrl =
  dbConnection == "sqlite"
    ? "sqlite::memory:"
    : `${dbConnection}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

sequalizeOpt = {
  logging: process.env.APP_DEBUG === "true" ? true : false,
};

export const db = new Sequelize(dbUrl, sequalizeOpt);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

db.sync()
  .then(() => {
    console.log("Database is synced; Tables are created.");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
