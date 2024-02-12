import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: `${process.env.MYSQL_USER}`,
  password: `${process.env.MYSQL_PASSWORD}`,
  database: "myorganizer",
  logging: true,
  entities: [__dirname + "/entity/*"],
  migrations: [__dirname + "/migrations/*.ts"],
};

export const AppDataSource: DataSource = new DataSource(dataSourceOptions);
