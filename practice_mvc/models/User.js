const { DataTypes } = require('sequelize');

const UserModel = (sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //NOT NULL
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        major: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    });
    return User;
};

module.exports = UserModel;
