import bcrypt from 'bcrypt';
import { userModel } from '../../../db/models/user.model.js';

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const existingUser = await userModel.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered', data: newUser });
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({ message: 'Login successful', data: user });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

export const logoutUser = async (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
};
