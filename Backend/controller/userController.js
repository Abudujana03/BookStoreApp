import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email }); //check if user exist or not in database
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Check if password is provided
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Password complexity requirements (minimum length)
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("koi error lass ra ai")
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
        console.error(error)
    }
};
//login route controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        console.log("Error in  login route")
        res.status(500).json({ message: "Internal server error" });
    }
};





// // trying to implement jwt
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import User from '../models/userModel.js';

// export const signup = async (req, res) => {
//     try {
//         const { fullname, email, password } = req.body;
//         const existingUser = await User.findOne({ email }); 

//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         if (!password) {
//             return res.status(400).json({ message: "Password is required" });
//         }

//         if (password.length < 6) {
//             return res.status(400).json({ message: "Password must be at least 6 characters long" });
//         }

//         const hashPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({
//             fullname: fullname,
//             email: email,
//             password: hashPassword,
//             token
//         });

//         await newUser.save();

//         // Generate JWT token
//         const token = jwt.sign(
//             { userId: newUser._id, email: newUser.email },
//             process.env.JWT_SECRET,
//             { expiresIn: '1h' } // Token expires in 1 hour
//         );

//         res.status(201).json({
//             message: "User created successfully",
//             token: token,
//             user: {
//                 _id: newUser._id,
//                 fullname: newUser.fullname,
//                 email: newUser.email,
//             },
//         });
//     } catch (error) {
//         console.error("Error signing up:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ message: "Invalid email or password" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid email or password" });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { userId: user._id, email: user.email },
//             process.env.JWT_SECRET,
//             { expiresIn: '1h' } // Token expires in 1 hour
//         );

//         res.status(200).json({
//             message: "Login successful",
//             token: token,
//             user: {
//                 _id: user._id,
//                 fullname: user.fullname,
//                 email: user.email,
//                 token,
//             },
//         });
//     } catch (error) {
//         console.error("Error logging in:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };
