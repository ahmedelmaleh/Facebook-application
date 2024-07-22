import express from 'express';
import { connectdb, sequelize } from './db/connection.js';
import userRouter from './src/modules/user/user.router.js';
import postRouter from './src/modules/post/post.router.js';
import commentRouter from './src/modules/comment/comment.router.js';
import specialRouter from './src/modules/special/special.router.js';
import { userModel } from './db/models/user.model.js';
import { postsModel } from './db/models/post.model.js';
import { commentsModel } from './db/models/comment.model.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectdb();

userModel.hasMany(postsModel, { foreignKey: 'authorId' });
postsModel.belongsTo(userModel, { foreignKey: 'authorId' });

userModel.hasMany(commentsModel, { foreignKey: 'userId' });
commentsModel.belongsTo(userModel, { foreignKey: 'userId' });

postsModel.hasMany(commentsModel, { foreignKey: 'postId' });
commentsModel.belongsTo(postsModel, { foreignKey: 'postId' });

sequelize.sync();

app.use('/users',userRouter);
app.use('/posts',postRouter);
app.use('/comments',commentRouter);
app.use('/specials',specialRouter);

app.listen(port, () => {
    console.log('server is running on port', port);
});
