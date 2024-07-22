import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { userModel } from "./user.model.js";
import { postsModel } from "./post.model.js";

export const commentsModel = sequelize.define('Comment', {
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

userModel.hasMany(commentsModel, { foreignKey: 'userId' });
commentsModel.belongsTo(userModel, { foreignKey: 'userId' });

postsModel.hasMany(commentsModel, { foreignKey: 'postId' });
commentsModel.belongsTo(postsModel, { foreignKey: 'postId' });
    