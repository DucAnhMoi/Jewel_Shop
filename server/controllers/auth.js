import User from "../models/User.js";

export const authController = {
  // Register
  registerUser: async (req, res) => {
    try {
      const username = await User.findOne({ username: req.body.username });
      const email = await User.findOne({ email: req.body.email });
      //Validate username
      if (username) {
        return res.status(404).json("Ten tai khoan da ton tai");
      }
      //Validate email
      if (email) {
        return res.status(404).json("Email da ton tai");
      }
      //Create New User
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      //Save to DB
      const user = await newUser.save();
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //Login
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (!user) {
        return res.status(404).json("Email hoac mat khau khong chinh xac");
      }
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

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
