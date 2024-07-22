import { postsModel } from "../../../db/models/post.model.js";

//Create post
export const createPost = async (req, res) => {
    const { title, content, authorId } = req.body;
    const newPost = await postsModel.create({ title, content, authorId });
    res.status(201).json({ message: 'Post created', data: newPost });
};

//Get posts
export const getPosts = async (req, res) => {
    const posts = await postsModel.findAll();
    res.status(200).json({ data: posts });
};

// Update post
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, authorId } = req.body;
    const post = await postsModel.findByPk(id);

    if (post.authorId !== authorId) {
        return res.status(403).json({ message: 'Sorry You can only edit your own posts' });
    }

    post.title = title;
    post.content = content;
    await post.save();
    res.status(200).json({ message: 'Post updated', data: post });
};

// Delete post 
export const deletePost = async (req, res) => {
    const { id } = req.params;
    const { authorId } = req.body;
    const post = await postsModel.findByPk(id);
    if (!post) {
        return res.status(404).json({ message: 'No post found with this ID' });
    }   

    if (post.authorId !== authorId) {
        return res.status(403).json({ message: 'Sorry You can only delete your own posts' });
    }

    await post.destroy();
    res.status(200).json({ message: 'Post deleted' });
};
