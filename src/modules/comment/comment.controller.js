import { commentsModel } from "../../../db/models/comment.model.js";

//Create comment
export const createComment = async (req, res) => {
    const { content, postId, userId } = req.body;
    const newComment = await commentsModel.create({ content, postId, userId });
    res.status(201).json({ message: 'Comment created', data: newComment });
};

//Get comments
export const getComments = async (req, res) => {
    const comments = await commentsModel.findAll();
    res.status(200).json({ data: comments });
};

// Update comment
export const updateComment = async (req, res) => {
    const { id } = req.params;
    const { content, userId } = req.body;
    const comment = await commentsModel.findByPk(id);
    if (!comment) {
        return res.status(404).json({ message: 'No comment found with this ID' });
    } 

    if (comment.userId !== userId) {
        return res.status(403).json({ message: 'Sorry You can only edit your own comments' });
    }

    comment.content = content;
    await comment.save();
    res.status(200).json({ message: 'Comment updated', data: comment });
};

// Delete comment 
export const deleteComment = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    const comment = await commentsModel.findByPk(id);

    if (comment.userId !== userId) {
        return res.status(403).json({ message: 'Sorry You can only delete your own comments' });
    }

    await comment.destroy();
    res.status(200).json({ message: 'Comment deleted' });
};
