import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../db.js';

const DataPeneliti = sequelize.define("data_peneliti",{
    nidn:{
        type:sequelize.INT,
        allowNull:true,
    },
    nidk:{
        type:sequelize.INT,
        allowNull:true,
    },
    nip:{
        type:sequelize.INT,
        allowNull:true,
    },
    nim:{
        type:sequelize.INT,
        allowNull:true,
    },
    id_sinta:{
        type:sequelize.INT,
        allowNull:true,
    },
    nama_lengkap:{
        type:sequelize.STRING,
        allowNull:true,
    },
    gelar:{
        type:sequelize.STRING,
        allowNull:true,
    },
    fakultas:{
        type:sequelize.STRING,
        allowNull:true,
    },
    prodi:{
        type:sequelize.STRING,
        allowNull:true,
    },
    jabatan_fungsional:{
        type:sequelize.STRING,
        allowNull:true,
    },
})