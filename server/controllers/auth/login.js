import User from "../../models/User.js";
import argon2 from "argon2";
import { generateAccessToken, generateRefreshToken } from "./generateToken.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  //Simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  }
  try {
    //   Check for existing username
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    }
    // Username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    }

    // Return token
    const accessToken = generateAccessToken(user);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      accessToken,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};
