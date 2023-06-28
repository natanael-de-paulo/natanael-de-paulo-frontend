import { UserProps } from "../../models/User";
import { ConfigRequest } from "../AuthHeader";
import { api } from "../api";

export async function findUserById(userId: string): Promise<UserProps> {
  try {
    const { data } = await api.get(`/users/me/${userId}`, ConfigRequest())
    return data;
  } catch (error) {
    throw new Error("Erro ao buscar usuario");
  }
} 