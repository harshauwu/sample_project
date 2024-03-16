import CONFIG from '../../configs/config';
import { Sequelize} from 'sequelize-typescript';
import { User } from './user';

/**
 * DB Connection for modules
 */
// Create a connection to the database

const sequelize = new Sequelize(CONFIG.dbName, CONFIG.dbUser, CONFIG.dbPassword, {
    host: CONFIG.dbHost,
    dialect: 'mysql',
    // repositoryMode: true,
    // operatorsAliases:true,
    pool: {
        max: CONFIG.pool.max,
        min: CONFIG.pool.min,
        acquire: CONFIG.pool.acquire,
        idle: CONFIG.pool.idle
    }
});

sequelize.addModels([User]);

export default sequelize