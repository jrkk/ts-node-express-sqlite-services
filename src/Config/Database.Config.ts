import { Sequelize } from 'sequelize';
import { config } from '@/Config/App.Config';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.database.storage,
  logging:
    config.environment === 'development' ? (sql: string) => console.debug(`[DEBUG] ${sql}`) : false,
});

export const connectDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('[INFO] Database connection has been established successfully.');
  } catch (error) {
    console.error('[ERROR] Unable to connect to the database:', error);
    throw error;
  }
};

export default sequelize;
