import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { userModel } from "./user.model.js";

export const postsModel = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

userModel.hasMany(postsModel, { foreignKey: 'authorId' });
postsModel.belongsTo(userModel, { foreignKey: 'authorId' });
