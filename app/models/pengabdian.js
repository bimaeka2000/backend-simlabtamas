import {Sequelize, DataTypes} from 'sequelize';
import sequelize from '../db.js';

const Pengabdian = sequelize.define('pengabdian',{
    judul_program:{
        type:sequelize.STRING,
        allowNull:true,
    },
    mitra_program:{
        type:sequelize.STRING,
        allowNull:true,
    },
    personalia_pelaksana:{
        type:sequelize.STRING,
        allowNull:true,
    },
    lama_kegiatan:{
        type:sequelize.STRING,
        allowNull:true,
    },
    biaya_kegiatan:{
        type:sequelize.INT,
        allowNull:true,
    },
    tahun_akademik:{
        type:sequelize.INT,
        allowNull:true,
    },
    skema:{
        type:sequelize.STRING,
        allowNull:true,
    },
    usulan:{
        type:sequelize.STRING,
        allowNull:true,
    }
})