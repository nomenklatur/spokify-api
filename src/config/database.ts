import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
dotenv.config();

export const DB_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [],
  synchronize: true,
};
