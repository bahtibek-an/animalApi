import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Animal = sequelize.define("animal", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, },
    description: { type: DataTypes.STRING, },
})

export default Animal;