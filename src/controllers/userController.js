import { DBinstance } from "../db/RamDB.js";
import { generateToken } from "../utils/generateToken.js";

export const createUser = (req, res) => {
  const user = req?.body;
  if (!user.userName) {
    return res.status(400).send("user name was not provided");
  }

  try {
    const newToken = generateToken();
    DBinstance.save(user, newToken);

    //setting a user cookie for 10 years - because i can!
    res.cookie("token", newToken, {
      maxAge: Date.now() + 10 * 365 * 24 * 60 * 60,
      httpOnly: true,
    });

    return res
      .status(201)
      .send({ token: newToken, message: "user was successfully created" });
  } catch (error) {
    return res.status(500).send("unable to save user, please try again");
  }
};
