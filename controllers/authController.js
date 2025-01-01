const bcrypt = require('bcryptjs');
const { AppDataSource } = require('../config/database');
const User = require('../src/entities/User');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const userRepository = AppDataSource.getRepository(User);

        // Find user
        const user = await userRepository.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
        }

        // Store user info in session
        req.session.user = {
            id: user.id,
            email: user.email,
            role: user.role
        };
        req.session.isAuthenticated = true;

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server' });
    }
}

async function register(req, res) {
    try {
        const { email, password } = req.body;
        const userRepository = AppDataSource.getRepository(User);

        // Check if user exists
        const existingUser = await userRepository.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email đã tồn tại' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = userRepository.create({
            email,
            password: hashedPassword
        });
        await userRepository.save(user);

        // Automatically log in the user after registration
        req.session.user = {
            id: user.id,
            email: user.email
        };
        req.session.isAuthenticated = true;

        res.status(201).json({
            message: 'Đăng ký thành công',
            success: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server' });
    }
}

async function forgotPassword(req, res) {
    try {
        const { email } = req.body;
        const userRepository = AppDataSource.getRepository(User);

        // Check if user exists
        const user = await userRepository.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'Email không tồn tại' });
        }

        // Here you would:
        // 1. Generate a reset token
        // 2. Save it to the database
        // 3. Send an email

        res.json({ message: 'Hướng dẫn đặt lại mật khẩu đã được gửi đến email của bạn' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi server' });
    }
}

function logout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
        res.clearCookie('connect.sid');
        res.json({ success: true });
    });
}

module.exports = {
    login,
    register,
    forgotPassword,
    logout
};
