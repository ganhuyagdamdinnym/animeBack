import { UserModel } from "@/models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { LoginUserInput } from "@/graphql/generated/client";
export const loginUser = async (
  _: any,
  { input }: { input: LoginUserInput },
  context: any
) => {
  const { password, username } = input;
  try {
    const userData = await UserModel.findOne({ username: username });
    console.log("user", userData);
    if (!userData) {
      return "not found user";
    }
    if (userData.password == password) {
      return "succeed";
    } else {
      return "not found user";
    }
    // if (!userData) {
    //   return Response.json({ message: "hereglegch alga" });
    // }
    // const isPasswordValid = await bcrypt.compare(password, userData.password);
    // if (!isPasswordValid) {
    //   return Response.json({ message: "hereglegch algaaaa" });
    // } else {
    //   console.log("done");
    //   const token = jwt.sign({ id: userData._id }, "SomeSecretKey", {
    //     expiresIn: "4h",
    //   });
    //   console.log("token", token);
    //   return token;
    // }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
