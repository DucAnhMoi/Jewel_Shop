import User from "../../models/User.js";
import argon2 from "argon2";
import { generateAccessToken, generateRefreshToken } from "./generateToken.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  //Simple validation
  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  }
  try {
    const username = await User.findOne({ username: req.body.username });
    const email = await User.findOne({ email: req.body.email });
    //Validate username && email
    if (username || email) {
      return res
        .status(400)
        .json({ success: false, message: "Username or email already taken" });
    }

    // Hash password
    const hashedPassword = await argon2.hash(password);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    //Save to DB
    const user = await newUser.save();

    // Return token
    const accessToken = generateAccessToken(user);

    return res.status(200).json({
      success: true,
      message: "Create new user successfully",
      accessToken,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};
