import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST ? process.env.DB_HOST : "localhost",
  port: 5432,
  username: "admin",
  password: "password",
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/entities/*`],
};

export { typeOrmConfig };
