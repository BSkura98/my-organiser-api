import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import { getDirName } from "./utils/path.js";

dotenv.config();

const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: `${process.env.MYSQL_USER}`,
  password: `${process.env.MYSQL_PASSWORD}`,
  database: "myorganizer",
  logging: true,
  entities: [getDirName(import.meta.url) + "/entity/*"],
  migrations: [getDirName(import.meta.url) + "/migrations/*.ts"],
};

export const AppDataSource: DataSource = new DataSource(dataSourceOptions);
