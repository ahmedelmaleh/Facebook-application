import { commentsModel } from "../../../db/models/comment.model.js";
import { postsModel } from "../../../db/models/post.model.js";
import { userModel } from "../../../db/models/user.model.js";


// Get a specific user with a specific post and post’s comments
export const getUserWithPostAndComments = async (req, res) => {
    const { userId, postId } = req.params;
    const user = await userModel.findByPk(userId, {
        include: {
            model: postsModel,
            where: { id: postId },
            include: [commentsModel]
        }
    });
    res.status(200).json({ data: user });
};

// Get a specific post with the author
export const getPostWithAuthor = async (req, res) => {
    const { postId } = req.params;
    const post = await postsModel.findByPk(postId, {
        include: [userModel]
    });
    res.status(200).json({ data: post });
};
