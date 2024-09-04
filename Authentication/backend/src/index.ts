import express from "express";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

// connecting to your databse
import './config/mongoose';
import User from './models/user';


const JWT_SECRET = "test123";

const app = express();
app.use(cookieParser());
app.use(express.json());



app.post("/signup", async (req, res) => {

    const { email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).send("User already exists");

        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).send("User registered successfully");

    } 
    
    catch (err) {

        res.status(500).send("Internal Server Error");

    }
});


app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("Invalid email or password");
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send("Invalid email or password");
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET);

        res.cookie("token", token);

        res.send("Logged in!");

    } catch (err) {
        console.error("Signin error:", err);

        res.status(500).send("Internal Server Error");

    }
});


app.get("/user", async (req, res) => {

    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    try {
        console.log("Received token:", token);
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        console.log("Decoded token:", decoded);

        const user = await User.findOne(decoded.id);

        console.log("User found:", user);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send({
            userId: user._id,
            email: user.email
        });
    } catch (ex: any) {
        console.error("Token verification or database error:", ex);

        if (ex.name === 'JsonWebTokenError') {
            return res.status(400).send("Invalid token.");
        } else if (ex.name === 'TokenExpiredError') {
            return res.status(401).send("Token expired.");
        }

        res.status(500).send("Internal Server Error");
    }
});



app.post("/logout", (req, res) => {

    res.cookie("token", "ads");

    res.json({

        message: "Logged out!"

    })
});


app.listen(3000);