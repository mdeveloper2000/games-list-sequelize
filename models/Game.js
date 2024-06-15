const { Sequelize, DataTypes } = require("sequelize")

const sequelize = require("../database/config")

const Game = sequelize.define("games", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    multiplayer: {
        type: DataTypes.ENUM,
        values: ["YES", "NO"],
        allowNull: false,
        defaultValue: "NO"
    },
    platinum: {
        type: DataTypes.ENUM,
        values: ["YES", "NO"],
        allowNull: false,
        defaultValue: "YES"
    },
    details: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    timestamps: false
})

module.exports = Game