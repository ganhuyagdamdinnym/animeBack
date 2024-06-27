import { UserModel } from "@/models/user";
import { CreateUser } from "@/graphql/generated/client";
export const createUser = async (
  _: any,
  { input }: { input: CreateUser },
  context: any
) => {
  const { username, email, password } = input;
  try {
    const user = await UserModel.create({
      username: username,
      email: email,
      password: password,
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};
