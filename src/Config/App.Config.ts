import dotenv from 'dotenv';

dotenv.config();

interface AppConfig {
  environment: string;
  port: number;
  database: {
    storage: string;
    dialect: string;
  };
}

export const config: AppConfig = {
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  database: {
    storage: process.env.DB_STORAGE || './database.sqlite',
    dialect: 'sqlite',
  },
};
