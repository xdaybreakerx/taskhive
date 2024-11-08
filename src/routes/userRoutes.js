const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

const { validateUserAuth } = require('../middleware/validateUserAuth');
const { isAdmin } = require('../middleware/isAdmin');

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Username for the new user
 *               password:
 *                 type: string
 *                 description: Password for the new user
 *     responses:
 *       201:
 *         description: User registered successfully, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jwt:
 *                   type: string
 *                   description: JWT token for the authenticated user
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: User ID
 *                     username:
 *                       type: string
 *                       description: Username of the new user
 *       400:
 *         description: Missing or invalid signup credentials
 *       500:
 *         description: Internal server error
 */
router.post('/signup', userController.userSignUp);

/**
 * @swagger
 * /users/login:
 *   get:
 *     summary: Log in an authenticated user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully logged in, protected content accessible
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Logged in successfully
 *       401:
 *         description: Unauthorized - missing or invalid token
 *       500:
 *         description: Internal server error
 */
router.get('/login', userController.userLogin);

/**
 * @swagger
 * /update-user-role:
 *   patch:
 *     summary: Update a user's role (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []  # Indicates JWT authentication is required
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user whose role is being updated
 *                 example: teamMemberUser
 *               role:
 *                 type: string
 *                 description: The new role to assign to the user
 *                 example: ProjectManager
 *     responses:
 *       200:
 *         description: Successfully updated the user's role
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                       description: The username of the updated user
 *                     role:
 *                       type: string
 *                       description: The new role of the updated user
 *       400:
 *         description: Missing or incorrect user details (e.g., missing username or role)
 *       403:
 *         description: Access denied. Admin role required.
 *       404:
 *         description: User not found.
 *       500:
 *         description: An error occurred while updating the user's role
 */
router.patch(
    '/update-user-role',
    validateUserAuth,
    isAdmin,
    userController.userUpdateRole
);

module.exports = router;
