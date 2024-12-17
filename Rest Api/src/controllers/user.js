const { Router } = require("express");
const { body, validationResult } = require('express-validator');

const { login, register } = require("../services/userService");
const { createToken } = require("../services/jwtService");
const { parseError } = require("../util");

const userRouter = Router();

userRouter.post('/login',
    body('email').trim(),
    body('password').trim(),
    async (req, res) => {
        try {
            const result = await login(req.body.email, req.body.password);
            const accessToken = createToken(result);
            res.json({
                _id: result._id,
                email: result.email,
                accessToken
            });
        } catch (err) {
            res.status(403).json({ code: 403, message: 'Incorrect email or password' });
        }
    });

userRouter.post('/register',
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email').trim().isEmail().withMessage('Must be a valid email format'),
    body('password').trim().isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    async (req, res) => {
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await register(req.body.username, req.body.email, req.body.password);
            const accessToken = createToken(result);
            res.json({
                _id: result._id,
                username: result.username,
                email: result.email,
                accessToken
            });
        } catch (err) {
            const parsed = parseError(err);
            res.status(403).json({ code: 403, message: parsed.message });
        }
    });

userRouter.post('/logout', (req, res) => {
    res.status(204).end();
});

module.exports = { userRouter };