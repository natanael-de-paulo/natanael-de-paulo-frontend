import { ProfileProps } from "./Post";

export type UserProps = {
  id: string;
  email: string;
  password: string;
  profile: ProfileProps;
}