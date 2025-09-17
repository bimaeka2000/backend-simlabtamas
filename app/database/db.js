import { Sequelize } from 'sequelize';

require('dotenv').config();

const sequelize = new Sequelize('', process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    dialect:  'mysql',
      define: {
        timestamps:false
      }
  })

  sequelize
  .authenticate()
  .then(() => console.log("Connection to database successfully!"))
  .catch((err) => console.error("Connection Failed:", err));
  
export default sequelize;