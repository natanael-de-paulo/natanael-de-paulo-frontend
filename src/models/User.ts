import { ProfileProps } from "./Post";

export type UserProps = {
  _id: string;
  email: string;
  password: string;
  profile: ProfileProps;
}