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
  .then(() => console.log("Koneksi database berhasil!"))
  .catch((err) => console.error("Gagal koneksi:", err));
  
export default sequelize;