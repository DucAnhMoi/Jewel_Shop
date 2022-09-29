export const logout = async (req, res) => {
  try {
    await RefreshToken.deleteMany({ user: id });
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("refreshToken", "", {
        maxAge: -1,
        path: "/",
      })
    );
    return res.status(200).json("Logged out!");
  } catch (err) {
    return res.status(400).json({ success: false, message: err });
  }
};
