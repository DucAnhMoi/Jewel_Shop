import User from "../models/User.js";
import argon2 from "argon2";
import {
  generateAccessToken,
  generateRefreshToken,
} from "./auth/generateToken.js";

export const authController = {
  // Register
  registerUser: async (req, res) => {},

  //Login
  loginUser: async (req, res) => {},

  // Reset Password
  resetPasswordUser: async (req, res) => {
    try {
      const userReset = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (!userReset) {
        return res.status(404).json("Mat khau khong chinh xac");
      }
      //Update Password
      const newUser = await User.findOneAndUpdate(
        {
          email: req.body.email,
          password: req.body.password,
        },
        {
          password: req.body.newPassword,
        }
      );
      //Save to DB
      return res.status(200).json(newUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
